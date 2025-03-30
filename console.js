let refreshInterval = 3000; //refreshInterval - The interval in milliseconds to refresh the logs. Default is 3000ms (3 seconds).
// <FEETCHING LOGS FROM SERVER>
fetchLogs();
async function fetchLogs() {
    let response = await fetch("http://192.168.1.140:3000/logs");
    let text = await response.text();
    let lines = text.split('\n');

    let logList = document.querySelector(".log>ul");
    logList.innerHTML = '';

    lines.forEach(line => {
        if (line.trim()) {
            let newLine = document.createElement("li");
            newLine.innerHTML = line;
            logList.appendChild(newLine);
        }
    });

    document.querySelector(".log").scrollTop = document.querySelector(".log").scrollHeight;
}
setInterval(fetchLogs, refreshInterval);

// <SENDING COMMANDS TO SERVER VIA RCON>
function getCommand(event) {
    event.preventDefault();
    let commandInput = document.querySelector("#consoleInput").value;
    if(commandInput[0] === "/") {
        commandInput = commandInput.substring(1);
    }
    console.log(commandInput);
}
//TODO