var bodyParser=require('body-parser');
module.exports=function(app){
	app.get('/',function(req,res){
		res.render("index");
	});

	app.get('/login',function(req,res){
		res.render("dashboard");
	});
}