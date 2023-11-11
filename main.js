let savedNote;
let currentQuestion = 0;
let totalQuestions;
let correctNote;
let remainingQuestions;
let correctCounter = 0;
let incorrectCounter = 0;
let currentNoteIndex;

function addHideClass(page) {
    let page1 = document.getElementById(page);
    page1.classList.add("hide");
}

function deleteHideClass(page) {
    let page2 = document.getElementById(page);
    page2.classList.remove("hide");
}
function playAgain() {
    let selector = document.getElementById("difficulty").value;

    if (selector == "Simple") {
        savedNote.play();
    } else if (selector == "Advanced") {
        savedNote.play();
    } else if (selector == "Pro") {
        savedNote.play();
    }
}


function resetButtons() {
    document.querySelectorAll(".choice-div button").forEach((button) => {
        button.style.backgroundColor = "";
    });
}
function showButtonsDependingOnDiffivculty() {
    addHideClass("Choice1");
    addHideClass("Choice2");
    addHideClass("Choice3");
    let selector = document.getElementById("difficulty").value;
    if (selector == "Simple") {
        deleteHideClass("Choice1");
    } else if (selector == "Advanced") {
        deleteHideClass("Choice2");
    } else if (selector == "Pro") {
        deleteHideClass("Choice3");
    }
    remainingQuestions = parseInt(document.getElementById("inputfield").value);
}
const notes = ["C", "D", "E", "F"];
const notes2 = ["C", "D", "E", "F", "G", "A", "B"];
const notes3 = [
    "C",
    "D",
    "E",
    "F",
    "G",
    "A",
    "B",
    "Fsharp",
    "Gsharp",
    "Csharp",
    "Asharp",
    "Dsharp",
];

function playFirstSound() {
    let selector = document.getElementById("difficulty").value;
    let randomNumber;

    if (selector == "Simple") {
        randomNumber = Math.floor(Math.random() * 4);
        savedNote = randomNote(randomNumber);
        savedNote.play();

        console.log(savedNote.src);
        const startIndex = savedNote.src.lastIndexOf("/") + 1;
        const endIndex = savedNote.src.lastIndexOf(".wav");

        correctNote = savedNote.src.substring(startIndex, endIndex);
        console.log(`Playing note: ${correctNote}`);
        const buttons = document.querySelectorAll(".div1 button");
        for (const button of buttons) {
            button.onclick = (e) => checkAnswer(e.target.textContent);
        }
    } else if (selector == "Advanced") {
        randomNumber = Math.floor(Math.random() * 6);
        savedNote = randomNote(randomNumber);
        savedNote.play();
        console.log(savedNote.src);
        const startIndex = savedNote.src.lastIndexOf("/") + 1;
        const endIndex = savedNote.src.lastIndexOf(".wav");

        correctNote = savedNote.src.substring(startIndex, endIndex);
        console.log(`Playing note: ${correctNote}`);
        const buttons = document.querySelectorAll(".div2 button");
        for (const button of buttons) {
            button.onclick = (e) => checkAnswer(e.target.textContent);
        }
    } else if (selector == "Pro") {
        randomNumber = Math.floor(Math.random() * 11);
        savedNote = randomNote(randomNumber);
        if (savedNote == "Gsharp") {
            savedNote = "G#/Ab";
        } else if (savedNote == "Asharp") {
            savedNote = "A#/Bb";
        } else if (savedNote == "Csharp") {
            savedNote = "C#/Db";
        } else if (savedNote == "Dsharp") {
            savedNote = "D#/Eb";
        } else if (savedNote == "Fsharp") {
            savedNote = "F#/Gb";
        }
        savedNote.play();
        console.log(savedNote.src);
        const startIndex = savedNote.src.lastIndexOf("/") + 1;
        const endIndex = savedNote.src.lastIndexOf(".wav");

        correctNote = savedNote.src.substring(startIndex, endIndex);
        console.log(`Playing note: ${correctNote}`);
        const buttons = document.querySelectorAll(".div3 button");
        for (const button of buttons) {
            button.onclick = (e) => checkAnswer(e.target.textContent);
        }
    }


    remainingQuestions--;

    console.log("total", totalQuestions);
    console.log("remaining", remainingQuestions);
    if (currentQuestion < totalQuestions) {
        currentQuestion++;
        updateCounter();
    }
    if (remainingQuestions <= 0) {
        document.getElementById("Next-Question").disabled = true;
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
        A: new Audio("assets/Sounds/A.wav"),
        "A#": new Audio("assets/Sounds/Asharp.wav"),
        B: new Audio("assets/Sounds/B.wav"),
        C: new Audio("assets/Sounds/C.wav"),
        "C#": new Audio("assets/Sounds/Csharp.wav"),
        D: new Audio("assets/Sounds/D.wav"),
        "D#": new Audio("assets/Sounds/Dsharp.wav"),
        E: new Audio("assets/Sounds/E.wav"),
        F: new Audio("assets/Sounds/F.wav"),
        "F#": new Audio("assets/Sounds/Fsharp.wav"),
        G: new Audio("assets/Sounds/G.wav"),
        "G#": new Audio("assets/Sounds/Gsharp.wav"),
    };

    for (const key in allNotes) {
        if (key === note) {
            allNotes[key].play();
        }
    }
}


function updateCounter() {
    document.getElementById(
        "questionCounter"
    ).textContent = `Question ${currentQuestion}`;
}
function checkAnswer(selectedNote) {
    // Get the name of the note that was played at the beginning of the question
    let selector = document.getElementById("difficulty").value;
    if (selector == "Simple") {
        if (selectedNote === correctNote) {
            // Correct answer
            document.getElementById("result").innerText = "Correct!";
            document.getElementById("result").style.color = "green";
            findButton(correctNote).style.backgroundColor = "green";
            correctCounter++;
        } else {
            // Incorrect answer
            document.getElementById("result").innerText = "Try again!";
            document.getElementById("result").style.color = "red";
            findButton(selectedNote).style.backgroundColor = "red";
            incorrectCounter++;
        }
    } else if (selector == "Advanced") {
        if (selectedNote === correctNote) {
            // Correct answer
            document.getElementById("result2").innerText = "Correct!";
            document.getElementById("result2").style.color = "green";
            findAdvancedButton(correctNote).style.backgroundColor = "green";
            correctCounter++;
        } else {
            // Incorrect answer
            document.getElementById("result2").innerText = "Try again!";
            document.getElementById("result2").style.color = "red";
            findAdvancedButton(selectedNote).style.backgroundColor = "red";
            incorrectCounter++;
        }
    } else if (selector == "Pro") {
        if (selectedNote == correctNote) {
            // Correct answer
            document.getElementById("result3").innerText = "Correct!";
            document.getElementById("result3").style.color = "green";
            findProButton(correctNote).style.backgroundColor = "green";
            correctCounter++;
        } else {
            // Incorrect answer
            document.getElementById("result3").innerText = "Try again!";
            document.getElementById("result3").style.color = "red";
            findProButton(selectedNote).style.backgroundColor = "red";
            incorrectCounter++;
        }
    }

    updateCounters();
    if (remainingQuestions === 0 && selectedNote === correctNote) {
        document.getElementById("Next-Question").disabled = true;
        document.getElementById("Next-Question").textContent = "Game over!";
        console.log("game ended!");
    }
}

function findButton(note) {
    const buttons = document.querySelectorAll(".div1 button");
    for (const button of buttons) {
        if (button.textContent === note) {
            return button;
        }
    }
    return null;
}

function findAdvancedButton(note) {
    const buttons = document.querySelectorAll(".div2 button");
    for (const button of buttons) {
        if (button.textContent === note) {
            return button;
        }
    }
    return null;
}

function findProButton(note) {
    const buttons = document.querySelectorAll(".div3 button");
    for (const button of buttons) {

        if (button.textContent == note) {
            return button;
        }

    }
    return null;
}
function updateCounters() {
    document.getElementById(
        "correctCounter"
    ).innerText = `Correct: ${correctCounter}`;
    document.getElementById(
        "incorrectCounter"
    ).innerText = `Incorrect: ${incorrectCounter}`;
}


function nextQuestion() {
    resetButtons();
    correctCounter = 0;
    incorrectCounter = 0;
    let selector = document.getElementById("difficulty").value;
    updateCounters();
    if (selector == "Simple") {
        document.getElementById("result").innerText = "";
    } else if (selector == "Advanced") {
        document.getElementById("result2").innerText = "";
    } else if (selector == "Pro") {
        document.getElementById("result3").innerText = "";
    }
    if (remainingQuestions > 0 || totalQuestions === Infinity) {
        playFirstSound();

        if (remainingQuestions === 0) {
            // Disable the Next Question button if there are no more remaining questions
            document.getElementById("Next-Question").disabled = true;
        }
    } else {
        console.log("Game ended!");
    }
}

function resetButtons() {
    document.querySelectorAll(".choice-div button").forEach((button) => {
        button.style.backgroundColor = "";
    });
    document.getElementById("result").innerText = "";
}

function tryAgain() {
    window.location.reload();
}

document.getElementById("Start-Quiz").addEventListener("click", function () {
    totalQuestions = document.getElementById("inputfield").value || Infinity;
});
document
    .getElementById("Next-Question")
    .addEventListener("click", nextQuestion);
document.getElementById("inputfield").addEventListener("change", function () {
    remainingQuestions = parseInt(this.value);

    console.log("rem==>", remainingQuestions);
    document.getElementById("Next-Question").disabled = false;
});



