const http=require("http");
const server=http.createServer((req, res)=>res.end("hello world!"));
server.listen(3000, "127.0.0.1", ()=>console.log("started.."));
const express=require("exprees");

//use express
const app=express();
app.get("/", (req, res)=>res.end("hello world"));
app.listen(3000, ()=>console.log("started2.."));
