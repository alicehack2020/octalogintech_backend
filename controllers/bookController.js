import BookModel from "../model/Book.js";
import VehicleModel from "../model/Vehicle.js";
 class BookController{

  static bookVehicle = async (req, res) => {
    try {
      // Logic to book the vehicle goes here
      const {
        fname,
        lname,
        wheel,
        vehicleType,
        model,
        startDate,
        endDate,
      } = req.body

      console.log(req.body)
      const allData = await BookModel.find({
        "startDate": { "$lt": new Date(endDate) },
        "endDate": { "$gt": new Date(startDate) },
        vehicleType:vehicleType
      })
      if (allData.length == 0) {
        const data = await BookModel.insertMany({
          fname,
          lname,
          wheel,
          vehicleType,
          model,
          startDate: new Date(startDate),
          endDate: new Date(endDate)})
          res.status(200).json({ message: 'Vehicle booked successfully'});

      }
      else {
        res.status(200).json({ message: 'Slot Not Available'});
      }
 
    } catch (error) {
      console.log(error)
      
      res.status(400).json({ message: 'Error occurred while booking the vehicle' });
    }
   }
   

   static vehicle = async (req, res) => {
    try {
      // Logic to book the vehicle goes here
      const { wheelData } = req.query
      const data = await VehicleModel.find({ wheel: wheelData })
      res.status(200).json({ message: 'Vehicle Loaded successfully',data});
    } catch (error) {
      res.status(400).json({ message: 'Error occurred while featching the vehicle' });
    }
   }
   

   static model = async (req, res) => {
    try {
      // Logic to book the vehicle goes here
      const { wheelData, vehicleData } = req.query
      let data = await VehicleModel.find({ wheel: wheelData, vehicle: vehicleData })
      data=data[0].models
      res.status(200).json({ message: 'Model Loaded successfully', data});
    } catch (error) {
      res.status(400).json({ message: 'Error occurred while featching the Model' });
    }
  }
  
  
   
   
 
  
}

export default BookController;