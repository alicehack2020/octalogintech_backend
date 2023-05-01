import mongoose from "mongoose";
//defining Schema
const bookSchema=new mongoose.Schema({
    fname:{type:String,required:true,trim:true},
    lname:{type:String,required:true,trim:true},
    wheel:{type:Number,required:true,trim:true},
    vehicleType:{type:String,required:true,trim:true},
    model:{type:String,required:true,trim:true},
    startDate:{type:String,required:true,trim:true},
    endDate:{type:String,required:true,trim:true},  
})

//Model
const BookModel=mongoose.model("book",bookSchema);
export default BookModel;