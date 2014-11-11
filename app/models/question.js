var moment=require('moment');
module.exports=function(orm, db){
    var Question=db.define('question',{
    //    id : { type: 'serial', key: true },
        title: {type:'text', required: true},
        content: {type:'text', required: true, big:true},
        createdAt: {type:'date', required: true, time:true}

    },
    {
        hooks:{
            beforeValidation:function(){
                this.createdAt=new Date();
            }
        },
        validations:{
            title:[orm.enforce.notEmptyString()],
            content:[orm.enforce.notEmptyString()]
        },
        methods:{
            serialize: function(){
                var answers;
                if(this.answers){
                    answers=this.answers.map(function(c){
                        return c.serialize();
                    });
                    //console.log(answers);
                }
                else
                {
                    answers=[];
                }
                return {
                    id : this.id,
                    title : this.title,
                    content : this.content,
                    createdAt : moment(this.createdAt).fromNow(),
                    answers : answers
                }
            }
        }
    });
}