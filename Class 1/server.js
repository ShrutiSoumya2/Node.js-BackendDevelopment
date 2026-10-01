// import { sum, multiply, subtract, divide } from './math.js'
// // const sum = require('./math')
// console.log(sum(1,2))


// // const multiply = require('./math')
// console.log(multiply(10,20))

// // const subtract = require('./math')  
// console.log(subtract(10,5))

// // const divide = require('./math')
// console.log(divide(10,2))
import os from 'os'
// console.log(os.platform())
// if(os.platform() === 'win32') {
//     console.log('You are using Windows')
// }
// else{
//     console.log('You are not using Windows')    
// }
// console.log(os.type())
// console.log(os.arch())
// console.log(os.cpus())
// console.log(os.totalmem()/1024/1024/1024)
// console.log(os.hostname())
// console.log(os.uptime()/60/60)

import path from 'path'

// console.log(path.basename('./parent/child.js'))
// console.log(path.extname('./parent/child.js'))
// console.log(path.dirname('./parent/child.js'))
// let newPath = path.join('parent', 'child.js', 'grandchild.js')
// console.log(newPath)
// console.log(path.sep)
// console.log(path.resolve('parent', 'child.js'))

import fs from 'fs'
// fs.mkdir('./parent/child', {recursive: true}, (err) => {
//     if(err) {
//         console.error(err)
//         return
//     }
// })
// fs.writeFile('./parent/child/index.html','<html><body><h1>Hello, node.js</h1></body></html>', (err) => {
//     if(err) {
//         console.error(err)
//         return
//     }
// })
// fs.readFile('./parent/child/index.html', 'utf-8', (err, data) => {
//     if(err) {
//         console.error(err)
//         return
//     }
//     console.log(data)
// })
fs.appendFile('./parent/child/index.html', '\n <b>This is a bold tag</b>', (err) => {
    if(err) {
        console.error(err)
        return
    }
}
)
// fs.cp('./server.js', './parent/child/index.html', (err) => {
//     if(err) {
//         console.error(err)
//         return
//     }
// })
// fs.unlink('./parent/child/index.html', (err) => {
//     if(err) {
//         console.error(err)
//         return
//     }
// })


import dns from 'dns'
// dns.lookup('facebook.com', (err, address) => {
//     if(err) {
//         console.error(err)
//         return
//     }
//     console.log(address)
// })

// dns.reverse('163.70.146.35', (err, domain) => {
//     if(err) {
//         console.error(err.message)
//         return
//     }
//     console.log(domain)
// })

import crypto from 'crypto'
// let password = '12456'
// let hashpassword = crypto.createHash('sha256').update(password).digest('Hex')
// console.log(hashpassword)
console.log(crypto.randomUUID())
