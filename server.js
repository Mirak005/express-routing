const express = require("express");
const app = express();





app.get("/", (req, res) => {
  let reqDate = new Date();
  let condition = reqDate.getHours() > 8 && reqDate.getHours() < 17;

  console.log(!condition);

  if (condition) {
    res.sendFile(__dirname + "/public/");
  } else {
    res.redirect("/closed.html")
   
  }
});


app.use(express.static(__dirname + "/public"));

app.listen(5000, err => {
  if (err) console.log("The server is not runing");
  else
    console.log(
      "server is runing on port 5000...\n" +
        "CTRL + C to stop the server from runing"
    );
});

// css issue

// app.use(date=(req,res,next)=>{

//   let reqDate= new Date()
//   let condition=reqDate.getHours()>8 && reqDate.getHours()<17
//   console.log(!condition )

//   if(condition){

//     // res.send("<h1>we are closed</h1>")
//        res.sendFile(__dirname + "/public/closed.html"  )

//     }
//   else  next()
// })
