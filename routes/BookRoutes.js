import express from "express"
const router=express.Router();
 
import BookController from "../controllers/bookController.js"
 
//
router.post("/book", BookController.bookVehicle)

//get vehicle
router.get("/vehicle", BookController.vehicle)

//get model
router.get("/model",BookController.model)

export default router;
