import express from 'express'
import { getFloors, getParking } from '../controllers/parkingController.js'
import { addFloorEntrance,deleteFloorEntrance,getFloorEntrance, getParkedCars, getSlots, getVehicleSizes, parkCar } from '../controllers/floorController.js'
const router = express.Router()

router.get('/', getParking)
router.get('/floors', getFloors)
router.get('/floors/entrances', getFloorEntrance)
router.post('/floors/entrances', addFloorEntrance)
router.delete('/floors/entrances', deleteFloorEntrance)
router.get('/floors/slots', getSlots)
router.get('/floors/vehicleSizes', getVehicleSizes)
router.get('/floors/park', getParkedCars)
router.post('/floors/park', parkCar)

export default router