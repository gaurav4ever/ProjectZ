var express=require('express');
var homeController=require('./controllers/homeController');
var app=express();

//set up the template engine
app.set('view engine','ejs');
//path to static files
app.use(express.static('./public'));

//fire the controller
homeController(app);

//listen to port
app.listen(3000);
console.log("your are listening to port 3000");