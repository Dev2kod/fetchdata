const express =require("express");
const users = require("./data");
const cors = require("cors");

const app = express();
app.use(express.json())
app.use(cors());

app.get('/userbyid',(req,res)=>{
    const id = parseInt(req.query.id);
    let user = null;
    for (let i = 0; i < users.length; i++) {
        if(users[i].id===id){
            user = users[i]; 
        }
    }
    if(user){
        res.json({
            name: user.name,
            work: user.work,
        })
    }else{
        res.json({
            msg: "Error404"
        })
    }

})

app.listen(3000,()=>{console.log("running on port 3000")});