export class Flyweight {
  constructor(
    private value: number
  ) {}
  
  compare(newValue: number): boolean {
    return this.value === newValue
  }
}
