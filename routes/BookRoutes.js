import express from "express"
const router=express.Router();
 
import BookController from "../controllers/bookController.js"
 
router.post("/book",BookController.bookVehicle)

export default router;
