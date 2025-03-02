// const { log } = require('console');
// const path = require('path');
// console.log(__filename);
// console.log(__dirname);

// console.log(path.basename(__filename));
// console.log(path.basename(__dirname));

// console.log(path.extname(__filename));

// console.log(path.join('/hello','/hello','file.txt'));
// console.log(path.join('hello','hello','file.txt'));
// console.log(path.join('hello','//hello','file.txt'));
// console.log(path.join('hello','hello/','/file.txt'));
// console.log(path.join('hello','hi','../file.txt'));


// console.log(path.resolve('/hello1','/hello2','file.txt'));
// console.log(path.resolve('hello1','hello2','file.txt'));
// console.log(path.resolve('hello1','//hello2','file.txt'));
// console.log(path.resolve('hello1','hello2/','/file.txt'));
// console.log(path.resolve('hello1','hello2','../file.txt'));

const path = require('path');
const pathProps=path.parse('/foo/bar/node.js');
console.log(pathProps);
