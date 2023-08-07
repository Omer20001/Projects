let navbar=document.getElementById("navbar")

window.addEventListener("scroll",()=>{
    if(window.scrollY>navbar.offsetHeight){
        navbar.classList.add("move")
    }
    else{
        navbar.classList.remove("move")
    }
})