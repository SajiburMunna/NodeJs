const fs=require('fs')

const obj={
    name:'sojib',
    address:'magura',
    phone:'01780451235'
}

const data=JSON.stringify(obj);

 fs.writeFile('./test.json',data,(err)=>{
    if(err){
        console.log('Error')
    }else{
        console.log('Success')
    }

 })