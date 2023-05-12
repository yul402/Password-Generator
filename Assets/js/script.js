//Store all questions for this quiz
const questions = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        optionA: "<javascript>",
        optionB: "<js>",
        optionC: "<script>",
        optionD: "Scripting",
        correctOption: "optionC" 
    },

    {
        question: "Where is the correct place to insert a JavaScript?",
        optionA: "<button> section",
        optionB: "<head> section",
        optionC: "<body> section",
        optionD: "<head> or <body>",
        correctOption: "optionD"
    },

    {
        question: "What is the correct syntax for referring to an external script called 'xxx.js'?",
        optionA: "<script src='xxx.js'>",
        optionB: "<script name='xxx.js'>",
        optionC: "<script href='xxx.js'>",
        optionD: "<script value='xxx.js'>",
        correctOption: "optionA"
    },
    
    {
        question: "How do you write 'Hello World' in an alert box?",
        optionA: "alertBox('Hello World')",
        optionB: "alert('Hello World')",
        optionC: "msg('Hello World')",
        optionD: "msgBox('Hello World')",
        correctOption: "optionB"
    },

    {
        question: "How do you create a function in JavaScript?",
        optionA: "function:myFunction()",
        optionB: "function myFunction()",
        optionC: "function = myFunction()",
        optionD: "function.myFunction()",
        correctOption: "optionB"
    },
    
    {
        question: "How to write an IF statement in JavaScript?",
        optionA: "if (i==5)",
        optionB: "if i==5 then",
        optionC: "if i =5",
        optionD: "if {i == 5}",
        correctOption: "optionA"
    },

    {
        question: "How does a WHILE loop start?",
        optionA: "while (i<10)",
        optionB: "while (i<10; i++)",
        optionC: "while i = 1 to 10",
        optionD: "while {i < 10}",
        correctOption: "optionA"
    },
    
    {
        question: "How can you add a comment in a JavaScript?",
        optionA: "<!-- comment -->",
        optionB: "// comment",
        optionC: "# comment",
        optionD: "/* comment */",
        correctOption: "optionB"
    }]


let indexQuestion = 0;
let numQuestion = questions.length;
let timeLeft = 75;
let finalScore = 0;

// Load question for user
function LoadQuestion(index){
     //When user click "Start Quiz": Start to run timer and hide user guidance
    if (index === 0){
        countdown()
        document.querySelector(".start-quiz").style.display = "none"
    }

    //Load Question
    const currentQuestion = questions[index]
    document.getElementById("display-question").textContent = currentQuestion.question;
    document.getElementById("option-one-label").textContent = currentQuestion.optionA;
    document.getElementById("option-two-label").textContent = currentQuestion.optionB;
    document.getElementById("option-three-label").textContent = currentQuestion.optionC;
    document.getElementById("option-four-label").textContent = currentQuestion.optionD;
    document.querySelector(".question-container").style.display = "block"
}

// Check user's choice after user clicking "Continue"
function checkAnswer(){
    const currentQuestion = questions[indexQuestion];
    const currentQuestionAnswer = currentQuestion.correctOption;
    //gets all elements in dom with name of 'option' (in this the radio inputs)
    const options = document.getElementsByName("option");
    //checking if checked radio button is same as the answer
    options.forEach((option) => {
        // Display the result and make modification to final score or timer accordingly
        if (option.checked === true && option.value === currentQuestionAnswer) {
            let questionResult = document.getElementById("question-result");
            questionResult.style.display = 'block'
            questionResult.textContent = 'Correct';
            questionResult.style.color = 'green';
            finalScore += 12.5;
            questionResult.style.display = 'block';
        } 
        if (option.checked === true && option.value !== currentQuestionAnswer){
            let questionResult = document.getElementById("question-result");
            questionResult.textContent = 'Wrong';
            questionResult.style.color = 'red';
            questionResult.style.display = 'block';
            if(timeLeft >= 10){
                timeLeft -= 10;
            }
            if(timeLeft < 10){
                timeLeft = 0;
            }
        }
    })
    
    indexQuestion += 1
    
    //Load next question
    if (indexQuestion < 8 && timeLeft >= 2){
        setTimeout(function(){
            document.getElementById("question-result").style.display = "none";
            LoadQuestion(indexQuestion)
        }, 9000);
    }
    // End the game if all questions are done
    if (indexQuestion == 8){
        setTimeout(function(){
            document.getElementById("question-result").style.display = "none";
            timeLeft = 0
        }, 1000);
    }

}


// Monitor the "Time Left" and give update after the reamining time is 0s.
function countdown() {
    var timeInterval = setInterval(function () {
        timeLeft --;
        document.querySelector("#timerVal").textContent = "Time Left: " + timeLeft + " s";

        // Stops execution of action at set interval
        if(timeLeft <= 0) {
            timeLeft = 0;
            clearInterval(timeInterval);
        // Modify the display of page after the game is end
            document.querySelector(".question-container").style.display = "none";
            document.querySelector("#final-score").textContent = finalScore;
            document.querySelector(".submit-container").style.display = "block";
            document.querySelector("#timerVal").textContent = "Time Left: 0 s"
        }
    },1000);
}



// Monitor the "submit-container"
function submitScore(){
    //Get all stored value in localStorage
    var oldScore = JSON.parse(localStorage.getItem("userScore")) || [];
    var newScore = {
    initial: document.getElementById('initials').value,
    grade: finalScore
    };
    //Append new result to existing localStorage
    oldScore.push(newScore)
    //Update localStorage variable
    localStorage.setItem("userScore", JSON.stringify(oldScore));
    //Clear the form after submission
    document.getElementById("initials").value = ""
}