const path = require('path')
const os = require('os')
const fs = require('fs')
const EventEmitter = require('events')
const Sum = require('./raise-event')

const myPath="/home/sajib/Desktop/NodeJs/index.js"

// console.log(path.basename(myPath))
// console.log(path.dirname(myPath))
// console.log(os.cpus())

// fs.writeFileSync('test.txt','Hello World')
// fs.appendFileSync('test.txt','\nHello World2')

//const data = fs.readFileSync('test.txt') 
//console.log(data.toString())

//async file system
// fs.readFile('test.txt',(err,data)=>{
//     if(err){
//         console.log(err)
//     }
//     console.log(data.toString())
// })

 
const sum = new Sum();
//register a listener
sum.on('sum',(num1,num2)=>{
    console.log(num1+num2)
})
 
sum.startSum()
