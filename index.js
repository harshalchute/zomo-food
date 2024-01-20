const express=require('express')
const bodyParser=require('body-parser')
const restaurantRoutes=require('./routes/restaurant')
const locationRoutes=require('./routes/location')
const mealtypeRoutes=require('./routes/mealtype')
const menuRoutes=require('./routes/menu')
const paymentRoutes=require('./routes/payment')
const mongoose=require('mongoose')
const cors=require('cors')
const path = require('path')

const DBCONNECTIONSTRING="mongodb+srv://root:root@zomato-clone.xwuyg.mongodb.net/zomato";

// const DBCONNECTIONSTRING="mongodb://localhost:27017/zomato";


mongoose.connect(
    DBCONNECTIONSTRING,
    ()=>{
        console.log("mongodb connected")
    },
    e=>console.log(e)
)


// const PORT=process.env.PORT || 6767;
var PORT = 8081;

var app=express()

app.use(bodyParser.json())
app.use(cors())
app.use('/restaurant',restaurantRoutes)
app.use('/location',locationRoutes)
app.use('/mealtype',mealtypeRoutes)
app.use('/menu',menuRoutes)
app.use('/pay',paymentRoutes)


//deploy configuration
app.use(express.static(path.resolve(__dirname, 'www')));

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'www', 'index.html'));
});


app.listen(PORT,()=>{
    console.log(`app is running on port:${PORT}`)
})
