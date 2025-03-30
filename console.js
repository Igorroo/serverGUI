async function fetchLogs() {
    let response = await fetch("http://192.168.1.140:3000/logs");
    let text = await response.text();
    console.log(text);
    newLine = document.createElement("li");
    newLine.innerHTML = text;
    document.querySelector(".log>ul").appendChild(newLine);
    log.scrollTop = log.scrollHeight;
}

setInterval(fetchLogs, 1000);
