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
        deleteHideClass('Choice1')
    } else if (selector == "Advanced") {
        deleteHideClass('Choice2')
    } else if (selector == "Pro") {
        deleteHideClass('Choice3')
    }
}