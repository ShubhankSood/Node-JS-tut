const os = require('os');
// console.log(os.networkInterfaces());

const obj={
    type:os.type(),
    user:os.userInfo(),
    release:os.release()
}
console.log(obj);


// https://nodejs.org/docs/latest/api/os.html#osnetworkinterfaces

