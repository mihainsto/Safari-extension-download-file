console.log("Hello World!", browser);
function redirectoToWebApp(){
    chrome.tabs.create({ url: chrome.runtime.getURL("/application.html") });
}

document.getElementById("button").onclick = function() {redirectoToWebApp()}
