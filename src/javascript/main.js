document.getElementById("grandparent").addEventListener("click", ()=>{
    console.log("grand parent is cliked")
},false)
document.getElementById("parent").addEventListener("click", (e)=>{
    console.log("parent is cliked")
    // e.stopPropagation();
}, false)
document.getElementById("child").addEventListener("click", (e)=>{
    console.log("child is cliked");
     e.stopImmediatePropagation();
    //   e.stopPropagation();
      
}, false)

document.getElementById("child").addEventListener("click", (e)=>{
    console.log("child is cliked another click event");
    //  e.stopImmediatePropagation();
    //   e.stopPropagation();
      
}, false)