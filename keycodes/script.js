let insert = document.getElementById("insert")

window.addEventListener("keydown", (event) => {

    //  console.log(event)
    insert.innerHTML = `<div class="key">
            ${event.key == " " ? "Space" : event.key}
            
            <small>Event-Key</small>

        </div>
        <div class="key">
            ${event.keyCode}
<br>
            <small>Event-KeyCode</small>
        </div>
        <div class="key">
            ${event.code}
            <small>event.code</small>
        </div>
        
        <div class="key key1">
        key ve keycode almak icin herhangi bir tusa basin
    </div>
    `

})