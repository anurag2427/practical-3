var http=require("http");
var myfun=require("./myfun");
var server=http.createServer(function(req,res){
   if(req.url=="/"){
    res.writeHead(200,{'content-type':'text/json'});
    res.write("{'CourseName':'NodeJS','Code':'INT222'}" + myfun()); 
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
server.listen(5000);
console.log("Server Connected at Port 5000");


var fs=require("fs");
// Example for a blocking code
/*var data=fs.readFileSync("demo.txt");
console.log(data.toString());*/
// Example for a Non blocking code
fs.readFile("demo.txt",(err,data)=>{
    if(err) throw err;
    console.log(data.toString());
});
console.log("Program Ended");