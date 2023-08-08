// let counters=document.querySelectorAll(".counter")

// counters.forEach((counter)=>{

//     counter.innerHTML=0;

// let uptadeCount=()=>{

//     let target =Number(counter.getAttribute("data-target"))

//     let c=+counter.innerHTML
//     let increment=target/300

//     if(c<target){
//         counter.innerHTML=Math.ceil(c+increment)

//         setTimeout(uptadeCount,1)
//     }


// }

// uptadeCount()


// })












let counters=document.querySelectorAll(".counter")

counters.forEach((counter)=>{

    counter.innerHTML=0
    
    let updateCounter=()=>{

        let target=Number(counter.getAttribute("data-target"))


        let c=+counter.innerHTML

        let increment=target/300

        if(c<target){
            counter.innerHTML=Math.ceil(c+increment)
            setTimeout(updateCounter,1)
        }

    }

    updateCounter()


})





















