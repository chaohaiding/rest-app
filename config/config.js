var path =require('path');
var config={
    path: path.normalize(path.join(__dirname,'..')),
    port: process.env.NODE_PORT||3000,
    /*database: {
        protocol:"mysql",
        //query: {pool:true},
        host: "127.0.0.1",
        database: "restapp", //your mysql database
        user: "root", //your mysql username
        password: "123456" //your mysql password
    }*/
    database: {
        protocol:"sqlite",
        //query: {pool:true},
        //host: "127.0.0.1",
        database: "restapp.sqlite", //your mysql database
        //user: "root", //your mysql username
        //password: "123456" //your mysql password
    }
};

module.exports=config;