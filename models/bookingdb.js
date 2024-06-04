

const mongoose=require('mongoose')


const book=new mongoose.Schema({

name:{
    type:String
    
},
phonenumber:{
    type:Number
   
},

catagory:{
    type:String
   

},
floor:{
    type:String
    

},
flat:{
    type:String


},
rent:{
    type:Number
   

}
})


const Booking= mongoose.model('booking', book);

module.exports=Booking;