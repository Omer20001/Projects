const container=document.getElementById("container")

const colors=["#e74c3c","#8e44ad","#3498ad","#ebe7e22","#2ecc71"]

const SQUARE=500








// for(let i=0 ;i<SQUARE;i++){
//     let square=document.createElement("div")
//     square.classList.add("square")
//     square.addEventListener("mouseover",()=> SetColor(square))
//     square.addEventListener("mouseout",()=> RemoveColor(square))

//     container.appendChild(square)
// }


// function SetColor(div){
//     div.style.backgroundColor=getRandomColor()
// }

// function getRandomColor(){

//     return colors[Math.floor(Math.random()*colors.length)]
// }

// function RemoveColor(div){
//     div.style.backgroundColor="#111"
// }





for(let i=0;i<SQUARE;i++){
    let square=document.createElement("div")

    square.classList.add("square")
    
square.addEventListener("mouseover",()=> GetColor(square))

square.addEventListener("mouseout",()=> RemoveColor(square))

    container.appendChild(square)
}



function GetColor(div){
    div.style.backgroundColor=getRandomColor()
}

function getRandomColor(){
   return colors[Math.floor(Math.random()*colors.length)]
}


function RemoveColor(div){
    div.style.backgroundColor="#111"
}