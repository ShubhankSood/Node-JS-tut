//async 
//sync 

// const fs=require('fs');

//Async
// fs.readFile('file.txt','utf-8',(err,data)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log(data);
// });

//Sync
// const fileContent=fs.readFileSync('file.txt','utf-8');
// console.log(fileContent);


//Write 

// const fs=require('fs');

//Async
// fs.writeFile('text.txt','My name is Shubhank Sood',(err)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log('File Written Successfully');
// })

//Sync
// fs.writeFileSync('text2.txt','Hello','utf-8');
// console.log('File Created Successfully');



//File Information
// const fs = require('fs');

//Async
// fs.stat('file.txt',(err,stats)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log(stats);
// });

//Sync
// const stats=fs.statSync('file.txt');
// console.log(stats);


//Create Directory [mkdir] in node.js
// const fs=require('fs');

//Create Directory 
// fs.mkdir('new_Directory',(err)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log('Directory Created Successfully');
// })

//Remove Directory
// fs.rmdir('new_Directory',(err)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log('Directory Removed Successfully');
// })

//Remove File folder in node.js
// const fs=require('fs');
//Async
// fs.unlink('file.txt',(err)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log('File Deleted');
// })

//Sync
// fs.unlinkSync('text2.txt');
// console.log('Done...');

