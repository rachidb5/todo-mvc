const Todo = require("../models/todoModel")

exports.register = async function(req,res){
    try{
        const todo = new Todo(req.body)
        await todo.register()
    
        if(todo.errors.length>0){
           res.json({ error: todo.errors})
        
            return
        }
    
       
        res.status(200).json(todo.todo._id);
    
         return;
        } catch(e){
                console.log(e)
                return res.status(400).json({ error: e });
            }
    
    }
    
exports.show = async function(req,res){
    try{
        
        const todo = await Todo.buscaPorId(req.params.id)
    
        return res.status(200).json(todo)
    
        }catch(err){
            console.log(err)
            return res.status(400).json({ error: err });
        }
}

exports.delete = async function(req,res){
   try { 
       if(!req.params.id) res.status(400).json({ error: todo.errors})

    const todo = await Todo.delete(req.params.id)
    if(!todo) return res.status(400).json({ error: todo.errors})
    return res.status(200).json({ message: "todo deleted" })

} catch(e){
    console.log(e)
            return res.status(400).json({ error: e })
}
}

exports.update = async function(req,res){
    try{
        if(!req.params.id) return res.render('404')
        const todo = new Todo(req.body.done)
        await todo.update(req.params.id)

        if(todo.errors.length>0){
            res.status(400).json({ error: todo.errors})
           return
        }
        return res.status(200).json(req.body.done)
        
    }catch(e){
        console.log(e)
        res.render('404')
    }
}

