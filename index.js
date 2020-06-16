const express= require('express');
const app=express();
const port=8000;

const db=require('./config/mongoose');
const Todo=require('./models/todos');
//use express router

// app.use('/',require('./routes'));

// set up view engine
app.set('view engine','ejs');
app.set('views','./views');
app.use(express.urlencoded());

app.use(express.static('assets'));

app.post('/todo_add',function(req,res){
       
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
});
 app.get('/',function(req,res){
     
    Todo.find({},function(err,todos){
        if(err){
            console.log('error in fetching');
            return;
        }
        return res.render('home',{
            todo_list: todos
        });
    });

 });

// to delete from list

app.get('/delete-todo',function(req,res){
     let id=req.query.id;

     Todo.findByIdAndDelete(id,function(err){
         if(err){
             console.log('error in deleting from todo list');
             return;
         }
         return res.redirect('back');
     });
});


app.listen(port,function(err){
    if(err){
        console.log('Error in running the server:' ,err);
    }
    console.log('Server is running on port:',port);
    }
);

