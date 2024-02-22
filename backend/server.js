import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

dotenv.config()

import { Parking } from './classes/parking.js'
import { Floor } from './classes/floor.js'
import { Entrance } from './classes/entrance.js'
import { Slots } from './classes/slots.js'
import { Vehicle } from './classes/vehicle.js'

import { notFound,errorHandler } from './middleware/errorMiddleware.js'

const port = process.env.PORT || 9000

import parkingRoute from './routes/parkingRoute.js'

export const Parking1 = new Parking("OO-Parking",[])
export const Flr_1 = new Floor("Flr-1",100,[],[],[],[])
Parking1.addFloor(Flr_1)

const Ent_1 = new Entrance("Ent-A",40)
const Ent_2 = new Entrance("Ent-B",49)
const Ent_3 = new Entrance("Ent-C",94)
const Ent_4 = new Entrance("Ent-D",95)
Flr_1.addEntrance(Ent_1)
Flr_1.addEntrance(Ent_2)
Flr_1.addEntrance(Ent_3)
Flr_1.addEntrance(Ent_4)


const SlotSp1 = new Slots("SP-1","sp",[1,20,10,11],30,["sv"])
const SlotSp2 = new Slots("SP-2","sp",[2,21,11,12],20,["sv"])
const SlotSp3 = new Slots("SP-3","sp",[3,22,12,13],10,["sv"])
const SlotSp4 = new Slots("SP-4","sp",[4,23,13,14],0,["sv"])
const SlotSp5 = new Slots("SP-5","sp",[5,24,14,15],1,["sv"])
const SlotSp6 = new Slots("SP-6","sp",[6,25,15,16],2,["sv"])
const SlotSp7 = new Slots("SP-7","sp",[7,26,16,17],3,["sv"])
const SlotSp8 = new Slots("SP-8","sp",[8,27,17,18],4,["sv"])
Flr_1.addParkingSlot(SlotSp1)
Flr_1.addParkingSlot(SlotSp2)
Flr_1.addParkingSlot(SlotSp3)
Flr_1.addParkingSlot(SlotSp4)
Flr_1.addParkingSlot(SlotSp5)
Flr_1.addParkingSlot(SlotSp6)
Flr_1.addParkingSlot(SlotSp7)
Flr_1.addParkingSlot(SlotSp8)

const SlotMp1 = new Slots("MP-1","mp",[9,28,18,19],5,["sv","mv"])
const SlotMp2 = new Slots("MP-2","mp",[10,29,19,20],6,["sv","mv"])
const SlotMp3 = new Slots("MP-3","mp",[11,30,20,21],7,["sv","mv"])
const SlotMp4 = new Slots("MP-4","mp",[12,31,21,22],8,["sv","mv"])
const SlotMp5 = new Slots("MP-5","mp",[13,32,22,23],9,["sv","mv"])
const SlotMp6 = new Slots("MP-6","mp",[14,33,23,24],19,["sv","mv"])
const SlotMp7 = new Slots("MP-7","mp",[15,34,24,25],29,["sv","mv"])
const SlotMp8 = new Slots("MP-8","mp",[16,35,25,26],39,["sv","mv"])
Flr_1.addParkingSlot(SlotMp1)
Flr_1.addParkingSlot(SlotMp2)
Flr_1.addParkingSlot(SlotMp3)
Flr_1.addParkingSlot(SlotMp4)
Flr_1.addParkingSlot(SlotMp5)
Flr_1.addParkingSlot(SlotMp6)
Flr_1.addParkingSlot(SlotMp7)
Flr_1.addParkingSlot(SlotMp8)

const SlotLp1 = new Slots("LP-1","lp",[18,1,27,28],59,["sv","mv","lv"])
const SlotLp2 = new Slots("LP-2","lp",[19,2,28,29],69,["sv","mv","lv"])
const SlotLp3 = new Slots("LP-3","lp",[20,3,29,30],79,["sv","mv","lv"])
const SlotLp4 = new Slots("LP-4","lp",[21,4,30,31],89,["sv","mv","lv"])
const SlotLp5 = new Slots("LP-5","lp",[22,5,31,32],99,["sv","mv","lv"])
const SlotLp6 = new Slots("LP-6","lp",[23,6,32,33],98,["sv","mv","lv"])
const SlotLp7 = new Slots("LP-7","lp",[24,7,33,34],97,["sv","mv","lv"])
const SlotLp8 = new Slots("LP-8","lp",[25,8,34,35],96,["sv","mv","lv"])
const SlotLp9 = new Slots("LP-9","lp",[26,11,1,2],93,["sv","mv","lv"])
const SlotLp10 = new Slots("LP-10","lp",[27,12,2,3],92,["sv","mv","lv"])
const SlotLp11 = new Slots("LP-11","lp",[28,13,3,4],91,["sv","mv","lv"])
const SlotLp12 = new Slots("LP-12","lp",[29,14,4,5],90,["sv","mv","lv"])
const SlotLp13 = new Slots("LP-13","lp",[30,15,5,6],80,["sv","mv","lv"])
const SlotLp14 = new Slots("LP-14","lp",[31,16,6,7],70,["sv","mv","lv"])
const SlotLp15 = new Slots("LP-15","lp",[32,17,7,8],60,["sv","mv","lv"])
const SlotLp16 = new Slots("LP-16","lp",[33,18,8,9],50,["sv","mv","lv"])
Flr_1.addParkingSlot(SlotLp1)
Flr_1.addParkingSlot(SlotLp2)
Flr_1.addParkingSlot(SlotLp3)
Flr_1.addParkingSlot(SlotLp4)
Flr_1.addParkingSlot(SlotLp5)
Flr_1.addParkingSlot(SlotLp6)
Flr_1.addParkingSlot(SlotLp7)
Flr_1.addParkingSlot(SlotLp8)
Flr_1.addParkingSlot(SlotLp9)
Flr_1.addParkingSlot(SlotLp10)
Flr_1.addParkingSlot(SlotLp11)
Flr_1.addParkingSlot(SlotLp12)
Flr_1.addParkingSlot(SlotLp13)
Flr_1.addParkingSlot(SlotLp14)
Flr_1.addParkingSlot(SlotLp15)
Flr_1.addParkingSlot(SlotLp16)


const SmallVehicle = new Vehicle("Small Vehicle","sv")
const MediumVehicle = new Vehicle("Medium Vehicle","mv")
const LargeVehicle = new Vehicle("Large Vehicle","lv")
Flr_1.addVehicleSize(SmallVehicle)
Flr_1.addVehicleSize(MediumVehicle)
Flr_1.addVehicleSize(LargeVehicle)



const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
}));    

app.use('/api/parking', parkingRoute)

app.get('/', (req,res) => res.send('Server is running.'))

app.use(notFound)
app.use(errorHandler)

app.listen(port, () => console.log(`Started on port ${port}`))
