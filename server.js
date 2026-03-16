const express = require("express")
const fs = require("fs")
const nodemailer = require("nodemailer")

const app = express()

app.use(express.static("public"))

let buyers = 0

// get products
app.get("/gears",(req,res)=>{

const data = fs.readFileSync("gears.json")
res.json(JSON.parse(data))

})

// buy route
app.get("/buy",(req,res)=>{

console.log("BUY BUTTON CLICKED")

buyers++

let transporter = nodemailer.createTransport({
host:"smtp.gmail.com",
port:465,
secure: true,
auth:{
user:"vicky7418vicky7418@gmail.com",
pass:"oznkgmqiaigjnaqv"
}
})

let mailOptions = {
from:"vicky7418vicky7418@gmail.com",
to:"vicky7418vicky7418@gmail.com",
subject:"New Buyer Alert",
text:"Someone clicked buy. Total buyers: " + buyers
}

transporter.sendMail(mailOptions,function(error,info){

if(error){
console.log("MAIL ERROR:",error)
}else{
console.log("EMAIL SENT")
}

})

res.json({message:"Buy registered"})

})

app.listen(3000,()=>{
console.log("Server running on http://localhost:3000")
})