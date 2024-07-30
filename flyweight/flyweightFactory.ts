import { Flyweight } from "./flyweiight";

export class FlyweightFactory {
  private pool: Flyweight[] = []
  private static flyweightFactory: FlyweightFactory | null = null
  
  private constructor() {}

  static getInstance(): FlyweightFactory {
    if (this.flyweightFactory) {
      return this.flyweightFactory
    }

    this.flyweightFactory = new FlyweightFactory()
    return this.flyweightFactory
  }

  getNumber(value: number): Flyweight {
    const exist = this.pool.find(flyweight => flyweight.compare(value))

    if (exist) {
      console.log(`Value: ${value} (já existente)`)
      console.log(this.pool)
      return exist
    }

    const newFlyweight = new Flyweight(value)
    this.pool.push(newFlyweight)
    console.log(`Value: ${value} (criado)`)
    console.log(this.pool)
    return newFlyweight
  }
}
