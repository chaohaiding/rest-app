var config=require('../../config/config');

module.exports=function(req, res, next){
    console.log("Home request!");
    res.render('index', { title: 'RESTful App' });
}