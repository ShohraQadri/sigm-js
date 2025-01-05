function myFun(){
    console.log("hello");
    
}

function Greet(name, callback){
console.log(`${name},Welcome`);
    callback();
}
Greet("shohra",myFun);