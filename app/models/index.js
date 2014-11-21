var orm=require('orm');//add orm module
var config=require('../../config/config');
var connection=null;
function setup(db,cb)
{
    require('./question')(orm,db);
    //require('./answer')(orm,db);
    //require('./comment')(orm,db);
}

module.exports=function(cb){
    if(connection) return cb(null, connection);
    orm.connect(config.database.protocol+'://'+config.database.database, function(err, db)
    {
        if(err) return cb(err);
        //console.log(db);
        connection=db;
        //db.settings.set('instance.returnAllErrors', true);
        setup(db,cb);
    });
}