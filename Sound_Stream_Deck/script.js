// let sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"]

// sounds.forEach((sound) => {

//     let btn=document.createElement("button");

//     btn.innerText=sound


//     btn.addEventListener("click",()=>{
//         soundStop()
//         document.getElementById(sound).play()
//     })
//     document.getElementById("buttons").appendChild(btn)

// })

// function soundStop(){

//     sounds.forEach((sound)=>{

//         const song=document.getElementById(sound)
//         song.pause()
//         song.currentTime=0

//     })


// }



let sounds=["applause","boo","gasp","tada","victory","wrong"]

sounds.forEach((sound)=>{

    let btn=document.createElement("button");
    btn.classList.add("btn")

    btn.innerHTML=sound

    document.getElementById("buttons").appendChild(btn);
btn.addEventListener("click",()=>{

    soundStop()
    document.getElementById(sound).play()


})

})


function soundStop(){
    sounds.forEach((sound)=>{
        document.getElementById(sound).pause();
        

    })
}