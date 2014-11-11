var orm=require('orm');
var helper=require('./helpers');

module.exports={
    list: function(req, res, next){
        req.models.question.find().all(function(err, questions){
            if(err) 
            {
                console.log(err);
                return next(err);
            }
            var items=questions.map(function(m){
                return m.serialize();
            });
            //console.log(questions);
            //console.log(items);
           // res.render('question', { title: 'List of Questions', questions:items});
        
            var content=req.get('Content-Type');
            if(content=="application/json")  res.send({questions:  items});
            else res.render('question', { title: 'List of Questions', questions:items});
        });
    },
    create: function(req, res, next){
        //console.log(req.body);
        var title=req.body.title;
        var content=req.body.content;
        var params={
            title: title,
            content: content
        }
        req.models.question.create(params, function(err, question){
            if(err){
                //console.log(err);
                if(Array.isArray(err)){
                    return res.send(200,{ errors: helpers.formatErrors(err)});
                }
                else
                {
                    return next(err);
                }
            }
            //console.log(question);
            return res.send(200, question.serialize());

        });
    }
}