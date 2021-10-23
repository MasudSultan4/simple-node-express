const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json())

const users = [
    
    { id: 0, name: 'Shabana', email: 'Shabana@gmail.com', phone: '01788888888' },
    { id: 1, name: 'Shabnoor', email: 'Shabnoor@gmail.com', phone: '01788888888' },
    { id: 2, name: 'Shrabonti', email: 'Shrabonti@gmail.com', phone: '01788888888' },
    { id: 3, name: 'Suchorita', email: 'Suchorita@gmail.com', phone: '01788888888' },
    { id: 4, name: 'Soniya', email: 'Soniya@gmail.com', phone: '01788888888' },
    { id: 5, name: 'Susmita', email: 'Susmita@gmail.com', phone: '01788888888' }
]

app.get('/',(req,res)=>{
    res.send("Hello Node JS and I am so exsitate.and start my jaurny")
})

app.get('/user',(req,res)=>{
    const search = req.query.search
    if(search){
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search))
        res.send(searchResult)
    }
    else{
        res.send(users)
    }
   
})

// app METHOD 
app.post('/user',(req,res)=>{
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser)

    console.log('heating the post',req.body);
    res.json(newUser)
})


app.get("/fruit",(req,res) => {
    res.send(['mango,jam,khatal,banana'])
})
app.get("/user/:id",(req,res)=>{
    const id = req.params.id;
    const user = users[id]
    res.send(user)
})

app.listen(port,() => {
    console.log("listen to port");
})