console.log("Hello World form the application!", browser);

function downloadFile(filename, uri) {
    const element = document.createElement('a');

    element.setAttribute('href', uri);
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

function downloadButtonImage(){
    downloadFile("image.png", "images/icon-512.png")
}

function downloadButtonTxt(){
    downloadFile(
      "textfile.txt",
      `data:text/plain;charset=utf-8,ThisIsText`,
    );
}

function downloadPWA(content)
{
     var file = new Blob([content],
                    {
                         type: 'text/xml;charset=UTF-8'
                    });
     var reader = new FileReader();
    
     reader.onload = function()
                    {
                         var popup = window.open();
                         var link = document.createElement('a');
                         link.setAttribute('href', reader.result);
                         link.setAttribute('download', 'filename.txt');
                         popup.document.body.appendChild(link);
                         link.click();
                    }
     reader.readAsDataURL(file);
}


document.getElementById("download-js-button-image").onclick = function() {downloadButtonImage()}
document.getElementById("download-js-button").onclick = function() {downloadButtonTxt()}
document.getElementById("download-js-button-2").onclick = function() {downloadPWA("TEST")}
