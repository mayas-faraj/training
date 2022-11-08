const http=require("http");
const express=require("exprees");
const server=http.createServer((req, res)=>res.end("hello world"));
server.listen(3000, "localhost", ()=>console.log("started.."));

//use express
const app=express();
app.get("/", (req, res)=>res.end("hello world"));
app.listen(3000, ()=>console.log("started2.."));
