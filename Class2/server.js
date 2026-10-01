import http from "http"  //to create a server
const server = http.createServer((req, res) => {
    // if (req.url === '/' && req.method === 'GET') {
//         res.end('<h1>Welcome to Backend</h1>')
//     }
//     else if (req.url === '/about' && req.method === 'GET') {   //about is calling API
//         // res.end('<h1>About Page</h1>')
//         res.end(JSON.stringify({    //JSON.stringify converts a JavaScript object, array, or primitive value into a standardized JSON string
//             message:'this is about page'
//         }))
//     }
//     else if (req.url === '/contact' && req.method === 'GET') {
//         res.end('<h1>Contact Page</h1>')
//     }
//     else if (req.url === '/home' && req.method === 'GET') {
//         res.end('<h1>Home Page</h1>')
//     }
//     else{
//         res.end('<h1>Page Not Found</h1>')
//     }
    let body = ''
    if (req.url === '/user' && req.method === 'POST') {
        req.on('data', (chunk) => {
            body = body+chunk
        })
        req.on('end', () => {
            body = JSON.parse(body)
            console.log(body)
            res.writeHead(200, {'Content-Type': 'application/json'})
            res.end(JSON.stringify({
                message: 'data fetched successfully',
                data: body,
                success: true
            }))
        })
    }
})
const port = 3000




server.listen(port, () => {
    console.log('Server is created', port)
})




