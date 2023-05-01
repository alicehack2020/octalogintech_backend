import BookModel from "../model/Book.js";
 class BookController{

   static bookVehicle = async (req, res) =>
   {
       console.log("res",req.body)
       res.status(200).json({ message: 'Logout successful' });
  }
 
  
}

export default BookController;