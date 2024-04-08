import { Concessionaire } from "./Concessionaire";
import { Sale } from "./Sale";
import { Vehicle } from "./vehicle/Vehicle";

export class Salesman {
  private sales: Sale[] = []
  private concessionaire?: Concessionaire

  constructor(
    public name: string,
    public tag: string,
    concessionaire: Concessionaire
  ) {
    concessionaire.addSalesman(this)
  }

  setConcessionaire(concessionaire: Concessionaire) {
    this.concessionaire = concessionaire
    this.sales = []
  }

  sellVehicle(vehicle: Vehicle) {
    if (!this.concessionaire) {
      throw new Error('Vendedor não ligado a nenhuma concessionária')
    }

    const sale = new Sale(vehicle.getPrice(), new Date())

    this.concessionaire.sellVehicle(vehicle)
    this.sales.push(sale)
  }

  calculateTotalSales(startDate?: Date, endDate?: Date): number {
    if (!startDate && !endDate) {
      return this.sales.reduce((total, s) => total += s.value, 0)
    }
    return 0
  }
}
