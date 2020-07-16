const express= require('express');
const router=express.Router();


const homeController= require('../controllers/home_controller');
const todoAdd=require('../controllers/todo-add');
router.get('/',homeController.home);
router.use('/users',require('./users'));
router.use('/users',require('./todo-add-route.'));
router.use('/users',require('./delete-todo-route.'));
console.log("router loaded");
module.exports=router;