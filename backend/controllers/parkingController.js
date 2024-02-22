import asyncHandler from 'express-async-handler'
import { Parking1 } from '../server.js'
// import Parking from '../models/parking/parkingModel.js'

const getParking = asyncHandler(async (req, res) => {
    // const data = await Parking.findOne({ id: 1001 }, {_id: 0})
    const data = Parking1.getName()
    if (data) {
        res.status(200).json(data)
    }
    else {
        res.status(400)
        throw new Error('Something went wrong')
    }
})

const getFloors = asyncHandler(async (req, res) => {
    const data = Parking1.getFloors()
    if (data) {
        res.status(200).json(data)
    }
    else {
        res.status(400)
        throw new Error('Something went wrong')
    }
})

export {
    getParking,
    getFloors
}