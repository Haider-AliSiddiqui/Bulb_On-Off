var h1El = document.getElementById("h1");
var bulbEl = document.getElementById("bulb");
var btnEl = document.getElementById("btn");
var isOpen = false

function handleBulbOnOff() {
   if(isOpen) {
    isOpen = false;
    bulbEl.src = "./image/bulb off.jpg"
    h1El.innerHTML = "Bulb off"
    btnEl.innerHTML = "Bulb on"
   }
   else {
    isOpen = true;
    bulbEl.src = "./image/bulb on.png"
    h1El.innerHTML = "Bulb on"
    btnEl.innerHTML = "Bulb off"
   }
}
