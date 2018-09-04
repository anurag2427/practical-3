var events=require("events");
var http=require("http");
var querystring = require('querystring');
var server=http.createServer(function(req,res){
    debugger;
   if(req.url=="/"){
       if(req.method=="POST"){
            console.log("Data Posted");
            var body="";
           // res.end("<h1>Post Successfull...</h1>"+req.body);
       }else{
        res.writeHead(200,{'content-type':'text/html'});
        var str="<h1>My Form</h1>";
        str+='<form method="post" action="/">';
        str+='Enter Name:<input type="text" name="uname" id="uname" value=""/><br/><br/>';
        str+='<input type="submit" value="Submit Data"/></form>';
        res.write(str); 
        res.end();
       }

       req.on('data', function (data) {
            body += data;
       });

        req.on('end', function () {
            var post = querystring.parse(body);
            console.log(post);
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end('Hello World\n');
        });
   // eventEmitter.emit("HomePage","Sample Data");
   }
   if(req.url=="/student"){
    res.write("This is STUDENT Web page"); 
    res.end();
    //eventEmitter.emit("StudentEvent");
   }
   if(req.url=="/employee"){
    res.write("This is Employee Web page"); 
    res.end();
   }

});
server.listen(5000);
console.log("Server Connected at Port 5000");

// Event object Creation
var eventEmitter=new events.EventEmitter();
//Event handler....
var eventHandler=function(){
    console.log("I'm Ready to handle an EVENT");
};
// Binding Event Name with Event handler
eventEmitter.on("connection",eventHandler);
// Emitting an Event named as connection
eventEmitter.emit("connection");
eventEmitter.on("HomePage",(data)=>{
    console.log("Home Page Reflected " + data);
});
var studentHandler=function(){
    console.log("Student Page Reflected ");
};
eventEmitter.on("StudentEvent",studentHandler);