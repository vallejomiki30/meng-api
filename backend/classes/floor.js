import { Vehicle } from "./vehicle.js"

const getParkingSlot = (entranceLocation,vehicleSize,grid,parkingSlots,parkedSlots) => {
    let nearest = grid
    let slot
    if (parkedSlots.length === 0) { 
      parkingSlots.map((parkingSlot)=>{
        if (parkingSlot.sizePermitted.includes(vehicleSize)) {
          if (nearest >= parkingSlot.position[entranceLocation]) {
            nearest = parkingSlot.position[entranceLocation]
            slot = parkingSlot
          }
        }
      })
    }
    else {
      let unavailable = []
      parkedSlots.map((parkedSpot)=>{
        unavailable.push(parkedSpot[0])
      })
      parkingSlots.map((parkingSlot)=>{
        if( (unavailable.includes(parkingSlot.location)) === false ) {
          if (parkingSlot.sizePermitted.includes(vehicleSize)) {
            if (nearest >= parkingSlot.position[entranceLocation]) {
              nearest = parkingSlot.position[entranceLocation]
              slot = parkingSlot
            }
          }
        }
      })
    }
    return slot
  }

export class Floor {
    constructor(name, grid, entrances, vehicleSizes, parkingSlots, parkedSlots) {
        this.name = name
        this.grid = grid
        this.entrances = entrances
        this.vehicleSizes = vehicleSizes
        this.parkingSlots = parkingSlots
        this.parkedSlots = parkedSlots
    }
    getEntrances = () => {
        return this.entrances
    }
    addEntrance = (entrance) => {
        this.entrances.push(entrance)
    }
    getEntranceCount = () => {
        return this.entrances.length
    }
    removeEntrance = (entranceLocation) => {
        const newEntrances = this.entrances.filter(object => {
            return object.location !== entranceLocation;
        });
        return this.entrances = newEntrances
    }
    getVehicleSizes = () => {
        return this.vehicleSizes
    }
    addVehicleSize = (vehicle) => {
        this.vehicleSizes.push(vehicle)
    }
    getParkingSlots = () => {
        return this.parkingSlots
    }
    addParkingSlot = (slot) => {
        this.parkingSlots.push(slot)
    }
    getParkedCars = () => {
        return this.parkedSlots
    }
    addParkedCar = (entranceLocation,vehicleSize) => {
        try {
            let entranceIndex = this.entrances.findIndex(x => x.name === entranceLocation)
            let result = getParkingSlot(entranceIndex,vehicleSize,this.grid,this.parkingSlots,this.parkedSlots)
            let date = new Date().getTime()
            this.parkedSlots.push([result.location, result.name, vehicleSize, date])
            return result.name
        } catch (error) {
            return undefined
        }
    }
}
