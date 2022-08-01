const http=require('http')
const fs=require('fs')

const server= http.createServer((req,res)=>{
    fs.readFile('./html.html',(err,data)=>{
        res.write(data)
        res.end()
    })

     

})

server.listen(4000,()=>{
    console.log('Server Running')
})