import { Vehicle } from "./Vehicle";

export class Motorcycle extends Vehicle {
  constructor(
    public hasWindshield: boolean,
    public hasPanniers: boolean,
    brand: string,
    model: string,
    fabricationYear: number,
    color: string,
    baseValue: number
  ) {
    super(
      brand,
      model,
      fabricationYear,
      color,
      baseValue
    )
  }

  getPrice(): number {
    return this.baseValue +
      (this.hasWindshield ? this.baseValue * 0.1 : 0) +
      (this.hasPanniers ? this.baseValue * 0.15 : 0) 
  }
}
