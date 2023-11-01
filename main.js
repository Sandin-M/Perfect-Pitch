let savedNote;


function addHideClass(page) {
    let page1 = document.getElementById(page);
    page1.classList.add("hide");

}

function deleteHideClass(page) {
    let page2 = document.getElementById(page);
    page2.classList.remove("hide");
}


function playAgain() {
    savedNote.play();
}


function showButtonsDependingOnDiffivculty() {
    addHideClass('Choice1');
    addHideClass('Choice2');
    addHideClass('Choice3');
    let selector = document.getElementById("difficulty").value;
    if (selector == "Simple") {
        deleteHideClass('Choice1');
    } else if (selector == "Advanced") {
        deleteHideClass('Choice2');
    } else if (selector == "Pro") {
        deleteHideClass('Choice3');
    }
}


function playFirstSound() {

    let selector = document.getElementById("difficulty").value;
    let randomNumber;

    if (selector == 'Simple') {
        randomNumber = Math.floor(Math.random() * 4);
        savedNote = randomNote(randomNumber);
        savedNote.play();
    } else if (selector == 'Advanced') {
        randomNumber = Math.floor(Math.random() * 6);
        savedNote = randomNote(randomNumber);
        savedNote.play();
    } else if (selector == 'Pro') {
        randomNumber = Math.floor(Math.random() * 11);
        savedNote = randomNote(randomNumber);
        savedNote.play();
    }

}



function randomNote(i) {
    allNotes = [
        new Audio("assets/Sounds/C.wav"),
        new Audio("assets/Sounds/D.wav"),
        new Audio("assets/Sounds/E.wav"),
        new Audio("assets/Sounds/F.wav"),
        new Audio("assets/Sounds/G.wav"),
        new Audio("assets/Sounds/A.wav"),
        new Audio("assets/Sounds/B.wav"),
        new Audio("assets/Sounds/Fsharp.wav"),
        new Audio("assets/Sounds/Gsharp.wav"),
        new Audio("assets/Sounds/Csharp.wav"),
        new Audio("assets/Sounds/Asharp.wav"),
        new Audio("assets/Sounds/Dsharp.wav"),
    ];
    return allNotes[i];
}



function playNote(note) {

    const allNotes = {
        "A": new Audio("assets/Sounds/A.wav"),
        "A#": new Audio("assets/Sounds/Asharp.wav"),
        "B": new Audio("assets/Sounds/B.wav"),
        "C": new Audio("assets/Sounds/C.wav"),
        "C#": new Audio("assets/Sounds/Csharp.wav"),
        "D": new Audio("assets/Sounds/D.wav"),
        "D#": new Audio("assets/Sounds/Dsharp.wav"),
        "E": new Audio("assets/Sounds/E.wav"),
        "F": new Audio("assets/Sounds/F.wav"),
        "F#": new Audio("assets/Sounds/Fsharp.wav"),
        "G": new Audio("assets/Sounds/G.wav"),
        "G#": new Audio("assets/Sounds/Gsharp.wav"),

    };

    for (const key in allNotes) {
        if (key === note) {
            allNotes[key].play();
        }
    }


}



