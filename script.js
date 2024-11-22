const CONSOLEINPUT = document.querySelector("#CONSOLEINPUT");
const memory = document.querySelector("#memory");
const storage = document.querySelector("#storage");
const temperature = document.querySelector("#temperture");
const cpuUsage = document.querySelector("#cpuUsage");
const RANGE = document.querySelector("#debug");
let value = document.querySelector("#debug").value;
function consoleUp(){
    alert(CONSOLEINPUT.value);
}
RANGE.addEventListener('input', function(event) {
    value = document.querySelector("#debug").value;
    memory.style.height = value + "%";
    storage.style.height = (value * -1)+100 + "%";
    cpuUsage.style.transform = "rotate(" + value * 3 + "deg)";
    temperature.style.transform = "rotate(" + (((value * 3) * -1)-60) + "deg)";
    console.log( value);
});