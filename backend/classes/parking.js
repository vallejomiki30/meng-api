export class Parking {
    constructor(name,floors){
        this.name = name
        this.floors = floors
    }
    getName = () => {
        return {name: this.name}
    }
    getFloors = () => {
        return this.floors
    }
    getFloorsCount = () => {
        return this.floors.length
    }
    addFloor = (floor) => {
        this.floors.push(floor)
    }
}