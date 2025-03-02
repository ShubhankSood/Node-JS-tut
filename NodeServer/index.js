const http=require('http');
const server=http.createServer((req,res)=>{
    // console.log("Started");
    // // res.setHeader("Hello","response");
    // res.setHeader('Content-Type','text/html');
    // res.end("<h1>Hello I am Response</h1>");

    if(req.url==='/'){
        res.end('Home Page');
    }
    if(req.url==='/about'){
        res.end('About Page');
    }
});
server.listen(3000,()=>{
    console.log("Server is running on port 3000");
});


