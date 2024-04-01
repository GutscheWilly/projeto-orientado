export abstract class Vehicle {
  constructor(
    public brand: string,
    public model: string,
    public fabricationYear: number,
    public color: string,
    public baseValue: number
  ) {}

  abstract getPrice(): number
}
