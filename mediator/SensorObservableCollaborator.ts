import { Mediator } from "./Mediator";
import { Observable } from "./Observable";

export class SensorObservableCollaborator extends Observable {
  constructor(
    private temperature: number,
    private ph: number,
    private pressure: number,
    private mediator: Mediator
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
    const gap = temperature - this.temperature
    const maxGap = 10

    this.temperature = temperature

    if (gap > maxGap) {
      this.handleMediator()
      return
    }

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

  handleMediator() {
    this.mediator.mediate()
  }
}
