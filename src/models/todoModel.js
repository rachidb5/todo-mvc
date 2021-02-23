const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    description: { type: String, required: true},
    done: { type: Boolean, required: true, default: false},
    createdAt: { type: Date, default: Date.now }
})

const todoModel = mongoose.model('todo', todoSchema)

function todo(body){
    this.body = body
    this.errors = []
    this.todo = null
}
todo.buscaPorId = async function(id){
    if(typeof id!=='string') return
    const todo = await todoModel.findById(id)
    return todo
}

todo.prototype.update = async function(id){
    if(typeof id !== 'string') return;
    this.todo = await todoModel.findByIdAndUpdate(id, this.body, { new:true })
    
}
todo.buscaTodo = async function(){
    
    const todos= await todoModel.find().sort({ nome:1 })
    return todos
}
todo.delete = async function(id){
    if(typeof id!=='string') return
    const todo = await todoModel.findOneAndDelete({_id: id})
    return todo
}


todo.prototype.register = async function(){
   
    this.todo = await todoModel.create(this.body)

}

module.exports = todo;