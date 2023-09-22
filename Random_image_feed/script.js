const container=document.querySelector(".container")
const unsplashURL='https://source.unsplash.com/random/'
const rows=9
for(let i=0;i<rows;i++){
    const img=document.createElement("img")
    img.classList.add("hvr-rotate")
    img.src=`${unsplashURL}${getSize()}`

    container.appendChild(img)
}
function getRandomNumber(){
    return Math.floor(Math.random()*10)+300
}

function getSize(){
    return `${getRandomNumber()}x${getRandomNumber()}`
}


function replay(){
    location.reload();
}