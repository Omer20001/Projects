const content=document.getElementById("content")
const speedEl=document.getElementById("speed")
const text="I am a computer engineering and front-end developer "
let idx=1;

let speed=100 /speedEl.value

writeText()
function writeText(){
    content.innerHTML=text.slice(0,idx)
    idx++

    if(idx>text.length){
        idx=1
    }

    setTimeout(writeText,speed)
}
