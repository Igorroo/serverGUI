const memory = document.querySelector("#memory");
const storage = document.querySelector("#storage");
const temperature = document.querySelector("#temperture");
const cpuUsage = document.querySelector("#cpuUsage");
const RANGE = document.querySelector("#debug");
let log = document.querySelector(".log");
log.scrollTop = log.scrollHeight;

function copyToClipboard(text, event) {
    const triggeringElement = event.target;
    navigator.clipboard.writeText(text).then(function () {
        console.log('Text copied to clipboard');
        triggeringElement.innerHTML = "Copied!";
        setTimeout(() => {
            triggeringElement.innerHTML = text;
        }, 1000);
    }).catch(function (err) {
        console.error('Could not copy text: ', err);
    });
}