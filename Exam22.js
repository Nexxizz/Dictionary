// class words {
    let request = new XMLHttpRequest();
    // constructor() {
    //     this.request = new XMLHttpRequest();
    // }

    function requestData(word) {
        "use strict";
        request.open("GET", "Exam22Api.php?search=" + word);
        request.onreadystatechange = processData;
        request.send(null);
    }

    function processData(){
        if(request.status == 404) {
            console.log("Fehler 404");
        }

        if(request.readyState == 4) { // Uebertragung = DONE
            if (request.status == 200) {   // HTTP-Status = OK
                if(request.responseText != null)
                    process(request.responseText);// Daten verarbeiten
                else console.error ("Dokument ist leer");
            }
            else console.error ("Uebertragung fehlgeschlagen");
        } else ;          // Uebertragung laeuft noch
    }

    function process(data){

        let obj = JSON.parse(data);

        // let section = document.getElementById("asideId");

        let newEntry = document.createElement("p");

        newEntry.textContent = obj.explanation;

        let explanation = document.getElementById("explanation");

        while (explanation.firstChild) {
            explanation.removeChild(explanation.lastChild);
        }

        explanation.append(newEntry);

        console.log(obj)

        // newEntry.innerText = obj.explanation;

    }
// }

function registerWordClickHandler() {
    "use strict";
    let section = document.getElementById("sectionId");
    section.addEventListener("dblclick", function (e){
            // while (section.firstChild) {
            //     section.removeChild(section.lastChild);
            // }
        wordClickHandler();
    }, false);
}

function wordClickHandler(){
    "use strict";
    // console.log(window.getSelection().toString());
    // let woerter = new words();
    requestData(window.getSelection().toString());



}
