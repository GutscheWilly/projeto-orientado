import { Mediator } from "./Mediator";
import { SensorObservableCollaborator } from "./SensorObservableCollaborator";
import { UniversityObserver } from "./UniversityObserver";

export class SensorUniversityMediator implements Mediator {
  private sensor?: SensorObservableCollaborator
  private universities?: UniversityObserver[]

  constructor() {}

  mediate() {
    if (!this.sensor || !this.universities) {
      return
    }

    console.log('Mediator')
    this.universities.forEach(university => university.update(this.sensor as SensorObservableCollaborator))
  }

  setSensor(sensor: SensorObservableCollaborator) {
    this.sensor = sensor
  }

  setUniversities(universities: UniversityObserver[]) {
    this.universities = universities
  }
}
