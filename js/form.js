let openPopUp = document.querySelector(".js-popUpOpen");
let closepopup = document.querySelector(".js-popUpClose");
let backgroundPopUp = document.querySelector(".js-popUpBackground");
let mainPopUp = document.querySelector(".js-popUp");
let bodypopup = document.querySelector(".js-popUpBody");
let form = document.querySelector(".js-form");
let answers = Array.from(document.querySelectorAll(".js-answer"));
let allQuestions = document.querySelectorAll(".js-question");

let handlequizz = (e) => {
    e.preventDefault();

    let checkedAnswers = answers.filter(answer => answer.checked)

    let isTrue = checkedAnswers.every(answer => answer.value === "true")
    let allChecked = checkedAnswers.length === allQuestions.length
    if (!allChecked) {
        mainPopUp.classList.replace("popUp", "popUp--active")
        backgroundPopUp.classList.replace("popUp__background", "popUp__background--active")
        bodypopup.textContent = "Nie zaznaczyłeś wszystkich odpowiedzi! :(";
        return
    }

    checkedAnswers.forEach(answer => {
        let ifCorrect = answer.value === "true"
        let answerBox = answer.closest("ol")

        if (ifCorrect){
            answerBox.classList.add("js-correct")
            answerBox.classList.remove("js-incorrect")
        } else {
            answerBox.classList.add("js-incorrect")
            answerBox.classList.remove("js-correct")
        }
        
    });
    

    if(isTrue && allChecked){
        mainPopUp.classList.replace("popUp", "popUp--active")
        backgroundPopUp.classList.replace("popUp__background", "popUp__background--active")
        bodypopup.textContent = "Gratulację! Zdałeś quizz!";
    }
    else {
        mainPopUp.classList.replace("popUp", "popUp--active")
        backgroundPopUp.classList.replace("popUp__background", "popUp__background--active")
        bodypopup.textContent = "Przegrałeś...Spróbuj ponownie!";
    }

}
form.addEventListener('submit', handlequizz);
form.addEventListener('reset', () =>{
    document.location.reload();
})



openPopUp.addEventListener('click', () => {
    mainPopUp.classList.replace("popUp", "popUp--active")
    backgroundPopUp.classList.replace("popUp__background", "popUp__background--active")
})

closepopup.addEventListener('click', () => {
    mainPopUp.classList.replace("popUp--active", "popUp");
    backgroundPopUp.classList.replace("popUp__background--active", "popUp__background");

})


