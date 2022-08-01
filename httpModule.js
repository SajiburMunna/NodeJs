const http=require('http')

const server= http.createServer((req,res)=>{

    console.log(req.url)
    res.end('<h1>You Can Everythins!</h1>')

})

server.listen(4000,()=>{
    console.log('Server Running')
})