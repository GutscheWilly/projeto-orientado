import { Vehicle } from "./Vehicle";

export class Car extends Vehicle {
  constructor(
    public hasAirConditioning: boolean,
    public hasSoundSystem: boolean,
    public hasSunroof: boolean,
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
      (this.hasAirConditioning ? this.baseValue * 0.1 : 0) +
      (this.hasSoundSystem ? this.baseValue * 0.05 : 0) + 
      (this.hasSunroof ? this.baseValue * 0.1 : 0)  
  }
}
