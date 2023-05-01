import mongoose from "mongoose";
//defining Schema
const vehicleSchema = new mongoose.Schema({
    wheel: {
      type: String,
      required: true,
    },
    vehicle: {
      type: String,
      required: true,
    },
    models: {
      type: [String], // this allows for multiple model values to be stored in an array
      default: [],
    },
  });

//Model
const VehicleModel=mongoose.model("vehicle",vehicleSchema);
export default VehicleModel;