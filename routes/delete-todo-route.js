const express= require('express');
const router=express.Router();

const DeleteTodo=require('../controllers/delete-todo');

router.get('/delete-todo',DeleteTodo.deleteTodo);

module.exports=router;