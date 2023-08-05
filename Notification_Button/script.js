const notifContainer=document.querySelector(".notifContainer")

const button=document.getElementById("button")

const notifications=[
    "Instagram Bildirim",
    "Wp Bildirim",
    "Telegram Bildirim",
    "Youtube Bildirim",
    "Facebook Bildirim",
    "Github Bildirim",
]

const colors = ["red","orange","purple","yellow","tomato","green"]



button.addEventListener("click",()=>createNotification())

function createNotification(){
    const notif =document.createElement("div")

    notif.classList.add("notif")
    notif.classList.add(getRandomColors())

    notif.innerHTML=getrandomNotif()

    notifContainer.appendChild(notif)

    setTimeout(()=>{
        notif.remove()
    },3000)



}


function getrandomNotif(){
    return notifications[Math.floor(Math.random()*notifications.length)]
}


function getRandomColors(){
   return colors[Math.floor(Math.random()*colors.length)]
}