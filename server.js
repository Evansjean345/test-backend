const http = require("http");
const app = require("./app");


app.get('/',(req,res)=>{
    res.send('hello word heroku app')
})
const sever = http.createServer(app).listen(process.env.PORT || 4000);
