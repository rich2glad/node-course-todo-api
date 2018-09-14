const {SHA256}= require('crypto-js');

const jwt = require('jsonwebtoken');

const bcrypt = require('bcryptjs');

var password = '123abc!';

// bcrypt.genSalt(10,(err,salt)=>{
//     bcrypt.hash(password,salt,(err,hash)=>{
//         console.log(hash);
//     });
// });

var hashesPassword ='$2a$10$mrWBTpS1x19w98Mwwj7GEOqDq9GesbraLBK7D9usoalaiFEo.YF/2';
bcrypt.compare(password,hashesPassword,(err,res)=>{
    console.log(res);
});

// var data ={
//     id: 4
// };

// var token= jwt.sign(data,'123abc');
// console.log(token);

// var decodedjwt= jwt.verify(token,'123abc');
// console.log(decodedjwt);


// var message ='I am user number 3';

// var hash = SHA256(message).toString();

// console.log(`Message: ${message}`);
// console.log(`hash: ${hash}`);



// var token = {
//     data,
//     hash: SHA256(JSON.stringify(data)+'somesecret').toString()
// }

// var resultHash = SHA256(JSON.stringify(token.data)+'somesecret').toString()

// if(resultHash == token.hash)
//     console.log('Data did not change ');
// else
// console.log('Data got changed')
