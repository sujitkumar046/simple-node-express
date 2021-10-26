const express = require('express');
const app = express ();
var cors = require('cors')

app.use(cors())
app.use (express.json())


const port = 5000; 
// const port = process.env.PORT || 3000;

// const handler = (req, res) => {
//     res.send ('hello from node')
// }

// app.get ('/',  handler);



app.get ('/', (req, res) => {
    res.send ({id: 1, name: 'Abul', email: "gello"})
});


const user = [ 
    {id: 0, name: 'Abul', email: "gello"},
    {id: 1, name: 'Kabul', email: "gello"},
    {id: 2, name: 'Babul', email: "gello"},
    {id: 3, name: 'Abul', email: "gello"},
    {id: 4, name: 'Abul', email: "gello"},
    {id: 5, name: 'Abul', email: "gello"},
    {id: 6, name: 'Abul', email: "gello"},
]

app.get ('/user', (req, res) => {
    const search =req.query.search
    if (search) {
        const searchResult = user.filter (eachuser => eachuser.name.toLowerCase().includes (search ));
        res.send (searchResult)
    }
    else {
        res.send (user)
    }
   
})

app.get ('/user/:id', (req,res) => {
    // res.send (user)
    const ID = req.params.id;
    const singleUser = user [ID];
    res.send (singleUser);

})

app.post ('/user', (req, res) => {

    const NewUser  = req.body;
    NewUser.id = user.length; 
    user.push (NewUser)
    console.log ('hitting the post', req.body)
    res.json (NewUser)
})

app.listen (port, () => {
    console.log ('listening to port', port);
});
