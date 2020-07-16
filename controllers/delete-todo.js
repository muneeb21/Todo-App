const Todo=require('../models/todos');

module.exports.deleteTodo=function(req,res){
    let id=req.query.id;

     Todo.findByIdAndDelete(id,function(err){
         if(err){
             console.log('error in deleting from todo list');
             return;
         }
         return res.redirect('back');
     });
   }