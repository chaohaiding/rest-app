var models=require('./app/models/');
models(function(err, db){
    if(err) throw err;
    db.drop(function(err)
    {
        if(err) throw err;
        db.sync(function(err){
            if(err) throw err;

            db.models.question.create({
                title:"Question Test 1", content:"This is a test question!"
            }, function(err, question){
                if(err) 
                {
                    console.log(err);
                    throw err;
                }
                console.log(question);

                db.close();
                console.log("Create Test Qeusion!");
            });
        });
    });
});