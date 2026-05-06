const result=79

const pr= new Promise((resolve,reject)=>{
   
  if (result>=80){
    resolve("Rakesh Has Got PS5")
  }else{
    reject("No Ps5 ")
  }

});

function demo(result){
    pr.then(res=>console.log(res))
    .catch(err=>console.log(err));
}

//console.log(pr)
//demo(result);
demo(79);