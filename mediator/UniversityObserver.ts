import { Observable } from "./Observable";
import { Observer } from "./Observer";
import { SensorObservableCollaborator } from "./SensorObservableCollaborator";

export class UniversityObserver implements Observer {
  constructor(
    private name: string
  ) {}

  update(observable: Observable) {
    const sensorObservable = observable as SensorObservableCollaborator
    const data = sensorObservable.getData()
    console.log(`Update university ${this.name}`)
    console.log(data)
  }
}
