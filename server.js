var express = require('express');
var multer = require("multer");
var upload = multer();
var app = express({encoding:"multipart/form-data"});

app.use(express.static('public'));

app.get("/", function (req,res) {
   res.sendFile(__dirname + "/views/index.html");  
});
app.post("/get-file-data", upload.single("file-to-upload"), function (req,res,next) {
    var obj = { fileSize : req.file.size };
    res.send(obj);
});
// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
