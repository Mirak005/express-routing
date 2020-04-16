const express = require("express");
const path = require("path");
const app = express();

//check time
function check() {
  let reqDate = new Date();
  let condition = reqDate.getHours() > 8 && reqDate.getHours() < 17;
  console.log(condition)
  console.log(reqDate.getHours())

  if (condition) {
    return true 
  } else {
    return false
  }
}


app.use("/" , check() ? express.static(__dirname + "/public") : express.static(__dirname + "/private") );

//Run the Server

app.listen(5000, err => {
  if (err) console.log("The server is not runing");
  else
    console.log(
      "server is runing on port 5000...\n" +
        "CTRL + C to stop the server from runing"
    );
});
