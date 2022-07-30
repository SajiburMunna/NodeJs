const sum =(a,b)=>{
    return a+b;

}

const sub=(a,b)=>{
    return a-b;
}

const test =(a,b)=>{
 return sum(a,b)/sub(a,b);
}

//module.exports =test; 
module.exports ={
    sum,sub,test
}; 

 