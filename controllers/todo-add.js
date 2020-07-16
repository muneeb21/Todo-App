
const Todo=require('../models/todos');

module.exports.addTodo=function(req,res){
    Todo.create({
        description: req.body.description,
        category: req.body.category,
        date: req.body.date
    }, function(err,newTodo){
        if(err){
            console.log('error in creating todo');
            return;
        }

        return res.redirect('back');
    });
   }

