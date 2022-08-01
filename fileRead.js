const fs=require('fs')

fs.readFile('./test.json',(err,data)=>{
    if(err){
        console.log(err)
    }
    const mainData = JSON.parse(data)
    console.log(mainData)
})