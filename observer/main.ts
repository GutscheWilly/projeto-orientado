import { SensorObservable } from "./SensorObservable"
import { UniversityObserver } from "./UniversityObserver"

function main() {
  const universities: UniversityObserver[] = [
    new UniversityObserver('Uifep'),
    new UniversityObserver('Unesp'),
    new UniversityObserver('Fatec'),
    new UniversityObserver('Ita'),
    new UniversityObserver('Usp')
  ]

  const sensorA = new SensorObservable(49, 14, 1.5)
  const sensorB = new SensorObservable(23, 8, 2)
  const sensorC = new SensorObservable(12, 3, 1)

  sensorA.add(universities[0])
  sensorA.add(universities[1])
  sensorA.add(universities[2])

  sensorB.add(universities[1])
  sensorB.add(universities[3])
  sensorB.add(universities[4])

  sensorC.add(universities[3])

  sensorA.setTemperature(13)
  sensorA.setPh(0)

  sensorB.setPressure(1)
  sensorB.setTemperature(-30)

  sensorC.setPh(7)

  sensorA.setPressure(4)
}

main()
