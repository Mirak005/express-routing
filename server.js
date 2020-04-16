const express = require("express");
const app = express();

//check time
function checkTime(from , to ) {
  let reqDate = new Date().getHours();
  let condition = reqDate > from  && reqDate < to;
 console.log(condition)
  return condition 
}

//  serve /public or /closed depending on the time of the request

app.use(
  "/",
  checkTime(8 , 17)
    ? express.static(__dirname + "/public")
    : express.static(__dirname + "/closed")
);


//Run the Server
app.listen(5000, err => {
  if (err) console.log("Error!:The server is not runing");
  else
    console.log(
      "server is runing on port 5000...\n" +
        "CTRL + C to stop the server from runing"
    );
});
