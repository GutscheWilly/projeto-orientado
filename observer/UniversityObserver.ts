import { Observable } from "./Observable";
import { Observer } from "./Observer";
import { SensorObservable } from "./SensorObservable";

export class UniversityObserver implements Observer {
  constructor(
    private name: string
  ) {}

  update(observable: Observable) {
    const sensorObservable = observable as SensorObservable
    const data = sensorObservable.getData()
    console.log(`Update university ${this.name}`)
    console.log(data)
  }
}
