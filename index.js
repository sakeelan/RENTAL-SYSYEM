
const express=require("express")
const cors=require("cors")

const path=require("path")
const app=express();
const mongoose=require("mongoose")

const Booking=require('./models/bookingdb')
const admin=require('./models/db');




var dbs="mongodb://localhost:27017/homeadmin";

mongoose.connect(dbs) 
  .then((result) =>{ console.log("Database connected"); app.listen(8000,()=>{
    console.log("server run on 8000");
  })})

// app.use(express.json())

//template engine
// app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

// Setup view engine
app.use(express.urlencoded({extended:false}))

app.set("view engine", "ejs")
app.set('views',path.join(__dirname,'./views'))

//nav path link

app.get('/',(req,res)=>{

    res.render('signin')
});

app.post('/signin',async(req,res)=>{
  const data={
    adminname:req.body.adminname,
    gender:req.body.gender,
    email:req.body.email,
    password:req.body.password,
    address:req.body.address,
    phonenumber:req.body.phoneno,
   
  }
  await admin.insertMany([data])

    res.render('login')
});



app.post('/login',async(req,res)=>{

  
  try {
    const check=await admin.findOne({adminname:req.body.adminname})

    if (check.password===req.body.password) {
      res.render("booking")
    }
  } catch  {
    res.send("wrong exist")
  }

});



// ---------booking insert---------------------------------------


app.post('/book', async(req,res)=>{

const book={
  name:req.body.name,
  phonenumber:req.body.phonenumber,
  catagory:req.body.catagory,
  floor:req.body.floor,
  flat:req.body.flat,
  rent:req.body.rent

}
await Booking.insertMany([book])

res.redirect('/booking')
});


//  booked name url--------------------



// get id for booker detail-----------------------------





//routes detail---------------------------------------

app.get("/booked", (req,res)=>{


  res.render("booked")
})


app.get("/login", (req,res)=>{


  res.render("login")
})


app.get("/booking", (req,res)=>{


  res.render("booking")
})


app.get("/contact", (req,res)=>{


  res.render("contact")
})










