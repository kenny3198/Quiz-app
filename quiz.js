 const startButton = document.querySelector("#start-btn")
 startButton.addEventListener("click", startGame);
 const questionContainerElement = document.querySelector("#question-container")
 const questionElement = document.querySelector("#questions");
 const answerButtonsElement = document.querySelector("#answer-buttons")
 const nextButton = document.querySelector("#next-btn")
 nextButton.addEventListener("click", () => {
     currentQuestionIndex++
     setNextQuestion()
 })

function startGame() {
startButton.classList.add("hide");
questionContainerElement.classList.remove("hide");
shuffledQuestion = questions.sort(() => Math.random() - .5) 
currentQuestionIndex = 0
setNextQuestion()

}
let shuffledQuestion, currentQuestionIndex
function setNextQuestion() {
    resetState()
     showQuestion(shuffledQuestion[currentQuestionIndex])

}
function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement("button")
        button.innerText = answer.text
        button.classList.add("btn")
        if(answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer)
        answerButtonsElement.appendChild(button)
        
    });
   
    }
    function resetState() {
        clearStatusClass(document.body)
        if (startButton.innerText === "Restart") {
            return window.location.reload()
        }
        nextButton.classList.add("hide")
        while (answerButtonsElement.firstChild) {
            answerButtonsElement.removeChild(answerButtonsElement.firstChild)
        }

    }
 
 function selectAnswer(e) {
     const selectedButton = e.target
     const correct = selectedButton.dataset.correct
     setStatusClass(document.body, correct)
     Array.from(answerButtonsElement.children).forEach(button => {
         setStatusClass(button, button.dataset.correct)
     })
     if (shuffledQuestion.length > currentQuestionIndex + 1) {
        nextButton.classList.remove("hide")
     } else {
         startButton.innerText = "Restart"
         startButton.classList.remove("hide")
     }
 }
 function setStatusClass(element, correct) {
     clearStatusClass(element)
     if (correct) {
         element.classList.add("correct")
     } else {
         element.classList.add("wrong")
     }
 }
 function clearStatusClass(element) {
   element.classList.remove("correct")
   element.classList.remove("wrong")  
 }
 const questions = [
     {
         question: "What is 2 + 2?",
         answers: [
             {text: "4", correct : true},
             {text: "22", correct : false}
         ]
     },
     {
        question: "Who is the head of a state?",
        answers: [
            {text: "President", correct : true},
            {text: "Governor", correct : false}
        ]
    },
    {
        question: "Who make jugdment in court?",
        answers: [
            {text: "jugdes", correct : true},
            {text: "lawer", correct : false}
        ]
    },
    {
        question: "Who are Responsible for Arresting Criminal?",
        answers: [
            {text: "Police", correct : true},
            {text: "Soldier", correct : false}
        ]
    }
 ]