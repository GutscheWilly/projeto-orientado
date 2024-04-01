import { VehicleData } from "./VehicleData"

export interface CarData extends VehicleData {
  hasAirConditioning?: boolean
  hasSoundSystem?: boolean
  hasSunroof?: boolean
} 
