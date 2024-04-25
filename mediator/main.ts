import { SensorObservableCollaborator } from "./SensorObservableCollaborator"
import { SensorUniversityMediator } from "./SensorUniversityMediator"
import { UniversityObserver } from "./UniversityObserver"

function main() {
  const sensorUniversityMediator = new SensorUniversityMediator()
  const sensorObservableCollaborator = new SensorObservableCollaborator(30, 7, 1, sensorUniversityMediator) 

  sensorUniversityMediator.setSensor(sensorObservableCollaborator)

  const unifesp = new UniversityObserver('Unifesp')
  const usp = new UniversityObserver('Usp')
  const ita = new UniversityObserver('Ita')

  sensorUniversityMediator.setUniversities([unifesp, usp, ita])

  sensorObservableCollaborator.setTemperature(57)

  sensorObservableCollaborator.setTemperature(100)
}

main()
