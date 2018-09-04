var http=require("http");
var events=require("events");
var server=http.createServer(function(req,res){
   if(req.url=="/"){
    res.writeHead(200,{'content-type':'text/json'});
    res.write("{'CourseName':'NodeJS','Code':'INT222'}"); 
    res.end();
   }
   if(req.url=="/student"){
    res.write("This is STUDENT Web page"); 
    res.end();
   }
   if(req.url=="/employee"){
    res.write("This is Employee Web page"); 
    res.end();
   }

});
server.listen(5000,(err,data)=>{
    if(err) throw err;
    console.log("Server Connected at Port 5000");
});
var eventEmitter=new events.EventEmitter();
var connectionHandler=function(){
    console.log("Connection Successfull with Connection Event");
    eventEmitter.emit("data_received");


};
eventEmitter.on("connection",connectionHandler);
eventEmitter.on("data_received",()=>{
    console.log("My Data ");
});
eventEmitter.emit("connection");
