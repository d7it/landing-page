document.getElementById("english").addEventListener("click", () => {
    var gerEl = document.getElementsByClassName("ger")
    for (let i = 0; i < gerEl.length; i++) {
        const element = gerEl[i];
        element.style.display = "none";
    }

    var engEl = document.getElementsByClassName("eng")
    for (let i = 0; i < engEl.length; i++) {
        const element = engEl[i];
        element.style.display = "initial";
    }
});

document.getElementById("german").addEventListener("click", () => {
    var engEl = document.getElementsByClassName("eng")
    for (let i = 0; i < engEl.length; i++) {
        const element = engEl[i];
        element.style.display = "none";
    }

    var gerEl = document.getElementsByClassName("ger")
    for (let i = 0; i < gerEl.length; i++) {
        const element = gerEl[i];
        element.style.display = "initial";
    }
});