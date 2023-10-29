function addHideClass(page) {
    let page1 = document.getElementById(page);
    page1.classList.add("hide");

}

function deleteHideClass(page) {
    let page2 = document.getElementById(page);
    page2.classList.remove("hide");
}





function doSomething() {
    let selector = document.getElementById("difficulty").value;
    if (selector == "Simple") {
        deleteHideClass('Choice1');
    } else if (selector == "Advanced") {
        deleteHideClass('Choice2');
    } else if (selector == "Pro") {
        deleteHideClass('Choice3');
    }
}


function playFirstNote(){
    
    
}


function playNote(note) {

    const allNotes = {
        "A": new Audio("assets/Sounds/A.wav"),
        "A#": new Audio("assets/Sounds/A#.wav"),
        "B": new Audio("assets/Sounds/B.wav"),
        "C": new Audio("assets/Sounds/C.wav"),
        "C#": new Audio("assets/Sounds/C#.wav"),
        "D": new Audio("assets/Sounds/D.wav"),
        "D#": new Audio("assets/Sounds/D#.wav"),
        "E": new Audio("assets/Sounds/E.wav"),
        "F": new Audio("assets/Sounds/F.wav"),
        "F#": new Audio("assets/Sounds/F#.wav"),
        "G": new Audio("assets/Sounds/G.wav"),
        "G#": new Audio("assets/Sounds/G#.wav"),

    };

    for (const key in allNotes) {
        if (key === note) {
            allNotes[key].play();
        }
    }


}



