import { Observable } from "./Observable";

export class SensorObservable extends Observable {
  constructor(
    private temperature: number,
    private ph: number,
    private pressure: number
  ) {
    super()
  }

  getData() {
    return {
      temperature: this.temperature,
      ph: this.ph,
      pressure: this.pressure
    }
  }

  getTemperatura() {
    return this.temperature
  }

  getPh() {
    return this.ph
  }

  getPressure() {
    return this.pressure
  }

  setTemperature(temperature: number) {
    this.temperature = temperature
    this.notify()
  }

  setPh(ph: number) {
    this.ph = ph
    this.notify()
  }

  setPressure(pressure: number) {
    this.pressure = pressure
    this.notify()
  }
}
