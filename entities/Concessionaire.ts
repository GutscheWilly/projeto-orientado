import { CarData } from "../dto/CarData";
import { VehicleData } from "../dto/VehicleData";
import { Salesman } from "./Salesman";
import { Car } from "./vehicle/Car";
import { Vehicle } from "./vehicle/Vehicle";

export class Concessionaire {
  private vehicles: Vehicle[] = []
  private salesmen: Salesman[] = []

  constructor(
    public name: string,
    public address: string
  ) {}

  searchVehicle(vehicleData: VehicleData): Vehicle[] {
    let returnedVehicles = this.vehicles
    const {brand, model, fabricationYear, color, baseValue, type} = vehicleData
    
    if (brand) {
      returnedVehicles = returnedVehicles.filter(v => v.brand === brand)
    }

    if (color) {
      returnedVehicles = returnedVehicles.filter(v => v.color === color)
    }

    if (model) {
      returnedVehicles = returnedVehicles.filter(v => v.model === model)
    }

    if (baseValue) {
      returnedVehicles = returnedVehicles.filter(v => v.baseValue <= baseValue)
    }

    if (fabricationYear) {
      returnedVehicles = returnedVehicles.filter(v => v.fabricationYear === fabricationYear)
    }

    if (type === 'car') {
      returnedVehicles = returnedVehicles.filter(v => v instanceof Car)
    }

    return returnedVehicles
  }

  
  addVehicle(vehicle: Vehicle) {
    this.vehicles.push(vehicle)
  }

  removeVehicle(vehicle: Vehicle) {
    this.vehicles = this.vehicles.filter(v => v !== vehicle)
  }

  addSalesman(salesman: Salesman) {
    salesman.setConcessionaire(this)
    this.salesmen.push(salesman)
  }

  removeSalesman(salesman: Salesman) {
    this.salesmen = this.salesmen.filter(s => s !== salesman)
  }

  sellVehicle(vehicle: Vehicle) {
    this.removeVehicle(vehicle)
  }

  calculateTotalSales(startDate?: Date, endDate?: Date): number {
    return this.salesmen.reduce((total, s) => total += s.calculateTotalSales(startDate, endDate), 0)
  }
}

