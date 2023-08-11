const loadText=document.querySelector(".loading-text")

const bg=document.querySelector(".bg")
let load =0;

let int=setInterval(bluring,30)


function bluring(){
    load++
    if(load>99){
        clearInterval(int)
    }
    loadText.innerHTML=`${load}%`
    let opacity=load/100
    bg.style.opacity=`${opacity}`
}


















// let int=setInterval(bluring,30)

// function bluring(){

//     load++
//     if(load>100){
//         clearInterval(int)
//     }
//     loadText.innerHTML=`${load-1}%`
//     let opacity=load/100;
//     bg.style.opacity =`${opacity}`;
// }