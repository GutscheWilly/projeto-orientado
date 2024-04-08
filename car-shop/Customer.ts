import { Salesman } from "./Salesman";
import { Vehicle } from "./vehicle/Vehicle";

export class Customer {
  constructor(
    public name: string, 
    public email: string, 
    public cpf: string
  ) {}

  buyVehicle(vehicle: Vehicle, salesman: Salesman) {
    salesman.sellVehicle(vehicle)
  }
}
