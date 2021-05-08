console.log("Cześć deweloperze!");

let switchButton = document.querySelector(".js-button");
let body = document.querySelector(".body");

switchButton.addEventListener("click", () => {
    if (switchButton.innerText === "Przełącz na tryb nocny"){
        switchButton.innerText = "Przełącz na tryb dzienny";
    }
    else if (switchButton.innerText === "Przełącz na tryb dzienny"){
        switchButton.innerText = "Przełącz na tryb nocny";
    }

    body.classList.toggle("body__dark");

})
