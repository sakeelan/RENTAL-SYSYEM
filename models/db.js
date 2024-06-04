

const mongoose=require('mongoose')


const admin=new mongoose.Schema({

adminname:{
    type:String
    
},
gender:{
    type:String
   
},

email:{
    type:String
   

},
password:{
    type:String
    

},
address:{
    type:String


},
phonenumber:{
    type:Number
   

},
},{ timestamps: true });


const user= mongoose.model('homeadmin', admin);

module.exports=user;