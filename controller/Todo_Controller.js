// var data = [{item:'task1'},{item:'task2'},{item:'task3'},{item:'task4'}];

module.exports = function(app,Parser,mongoose){

    mongoose.connect('mongodb://localhost/test');

    var schema = new mongoose.Schema({
        item:String
    });

    var todo = mongoose.model('Todo',schema);
    
    app.get('/',function(req,res){
        res.send('everything is going well go to route /todo to access the TODO App');
    });

    app.get('/todo',function(req,res){
        todo.find({},(err,data)=>{
            if(err)
                throw err;
            else
                res.render('todo',{data:data});
        });
    });

    app.post('/todo',Parser,function(req,res){
       let task= todo(req.body).save(function(err,data){
            if(err)
                throw err;
            else
            res.json(data);
        }); 
    });

    app.delete('/todo/:task',function(req,res){
        todo.find({item:req.params.task}).remove((err,data)=>{
            if(err)
                throw err;
            else
            res.json(data);
        });

        // code for static data
        // data=data.filter(task=>{
        //     return task.item !== req.params.task;
        // });
        // res.json(data);
    });

};
