const express= require("express");
const {HandleTodo, getTodo, updateTodo, deleteTodo}= require('../Controllers/HandleTodo.controller')
const Todo= express.Router();

Todo.get("/",getTodo)
Todo.post('/',HandleTodo);
Todo.delete('/:id',deleteTodo)
Todo.patch('/',updateTodo);
module.exports={
    Todo
}