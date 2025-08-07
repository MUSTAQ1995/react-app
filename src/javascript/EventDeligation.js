document.getElementById("category").addEventListener("click", (e)=>{
    console.log('Call back is clicked',e.target.tagName)
    // window.location.href="/"+e.target.id
}, false)

document.getElementById("grandparent").addEventListener("click", (e)=>{
    console.log('Bubbling example',e.target.id)
}, false)

document.getElementById("form").addEventListener("keyup", (e)=>{
    if(e.target.dataset.uppercase != "undefined"){
        e.target.value = e.target.value.toUpperCase()
    }
}, false)