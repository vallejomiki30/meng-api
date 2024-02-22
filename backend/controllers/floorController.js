import asyncHandler from 'express-async-handler'
import { Flr_1 } from '../server.js'

const getFloorEntrance = asyncHandler(async (req, res) => {
    const data = Flr_1.getEntrances()
    if (data) {
        res.status(200).json(data)
    }
    else {
        res.status(400)
        throw new Error('Something went wrong')
    }
})

const addFloorEntrance = asyncHandler(async (req, res) => {
    const reqBody = await req.json()
    const values = reqBody.values
    console.log(values)
})

const deleteFloorEntrance = asyncHandler(async (req, res) => {
    const {values} = req.body
    if (Flr_1.getEntranceCount() > 3 ) {
        Flr_1.removeEntrance(values)
        res.status(200).json({message:"Success"})
    }
    else {
        res.status(400)
        throw new Error("Minimum of 3 entrance is required")
    }
})

const getSlots = asyncHandler(async (req, res) => {
    const data = Flr_1.getParkingSlots()
    if (data) {
        res.status(200).json(data)
    }
    else {
        res.status(400)
        throw new Error('Something went wrong')
    }
})

const getVehicleSizes = asyncHandler(async (req, res) => {
    const data = Flr_1.getVehicleSizes()
    if (data) {
        res.status(200).json(data)
    }
    else {
        res.status(400)
        throw new Error('Something went wrong')
    }
})

const getParkedCars = asyncHandler(async (req, res) => {
    const data = await Flr_1.getParkedCars()
    if (data) {
        res.status(200).json(data)
    }
    else {
        res.status(400)
        throw new Error('Something went wrong')
    }
})

const parkCar = asyncHandler(async (req, res) => {
    const { entrance, vehicleSize } = req.body.values
    const data = await Flr_1.addParkedCar(entrance,vehicleSize)
    if (data) {
        res.status(200).json({"data":data})
    }
    else {
        res.status(400)
        throw new Error('No available slot')
    }
})

export {
    getFloorEntrance,
    addFloorEntrance,
    deleteFloorEntrance,
    getSlots,
    getVehicleSizes,
    getParkedCars,
    parkCar,
}