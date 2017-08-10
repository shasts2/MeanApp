let Todo = require('./models/todo');

module.exports = function (app) {
    app.get('/',  (request, response) => {
        response.sendFile(__dirname + '/index.html');
    });
    app.get('/api/todos', (req, resp) => {
        Todo.find((err, todos)=>{
            if(err) 
                resp.send(err);
            res.json(todos);
        });
    });
    app.post('/api/todos', (req, resp) => {
        Todo.create({
            text: req.bpdy.text,
            done: false        
        }, (err, todos)=>{
            if(err) 
              resp.send(err);
            Todo.find((err, todos)=> {
                if(err) 
                    resp.send(err);
                res.json(todos);
            });
        });
    });
    app.delete('/api/todos', (req, resp) => {
        Todo.remove({
           _id : req.params.todo_id       
        }, (err, todos) => {
            if (err) 
              resp.send(err);
            Todo.find((err, todos) => {
                if (err) 
                    resp.send(err);
                res.json(todos);
            });
        });
    });
};