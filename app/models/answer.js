var moment=require('moment');
module.exports=function(orm, db){
    var Comment=db.define('answer',{
        body: String,
        createdAt: Date
    },
    {
        hooks:{
            beforeValidation:function(){
                this.createdAt=new Date();
            }
        },
        validations:{
            body: orm.enforce.ranges.length(1,1024)//1-1024 characters
        },
        methods:{
            serialize:function(){
                return{
                    body: this.body,
                    createdAt: moment(this.createdAt).fromNow()
                }
            }
        }
    });
    
    Comment.hasOne('question', db.models.question,{required:true, reverse:'answers', autoFetch: true});
}