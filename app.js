var express=require('express');

var admin_apiController=require("./controllers/admin_apiController");
var homeController=require('./controllers/homeController');
var app=express();

//set up the template engine
app.set('view engine','ejs');
//path to static files
app.use(express.static('./public'));

//fire the controller
// homeController(app);
admin_apiController(app);

//listen to port
app.listen(3000);
console.log("your are listening to port 3000");