var quiz = [
    {
        question: "Q1: What does HTML stand for?",
        a: "Hyper and Text MarkUp Language",
        b: "Heper Tool Machine Language",
        c: "Hyperlink Text MarkUp Language",
        d: "Hyper Text MarkUp Language",
        ans: "ans4",
    },
    {
        question: "Q2: Who is making the Web standards?",
        a: "Microsoft",
        b: "Google",
        c: "The World Wide Web",
        d: "Mozilla",
        ans: "ans3",
    },
    {
        question: "Q3: Choose the correct HTML element for the largest heading:",
        a: "<head>",
        b: "<h6>",
        c: "<heading",
        d: "<h1>",
        ans: "ans4",
    },
    {
        question: "Q4: Which character is used to indicate an end tag?",
        a: "*",
        b: "^",
        c: "/",
        d: "<",
        ans: "ans3",
    },
    {
        question: "Q5: What is the full form of CSS?",
        a: "Cascading Style Sheets",
        b: "Cascading Style Sheeps",
        c: "Cartoon Style Sheets",
        d: "Cascading Super Sheets",
        ans: "ans1",
    },
    {
        question: "Q6: How can you make a numbered list?",
        a: "dl",
        b: "ul",
        c: "ol",
        d: "list",
        ans: "ans3",
    },
    {
        question: "Q7: How can you make a bulleted list?",
        a: "dl",
        b: "ul",
        c: "ol",
        d: "list",
        ans: "ans2",
    },
];

var question = document.getElementById("question");
var answers = document.querySelectorAll('.answer');
var option1 = document.getElementById("option1");
var option2 = document.getElementById("option2");
var option3 = document.getElementById("option3");
var option4 = document.getElementById("option4");
var showScore = document.getElementById("showScore");

var questionCount = 0;

function loadQuestion() {
    var questionList = quiz[questionCount];
    question.innerText = quiz[questionCount].question;
    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;

}
loadQuestion();

function deSelect(){
 answers.forEach((currentElement) => currentElement.checked = false);

}

function checkAnswer() {
    var answer;
    answers.forEach((currentElement) => {
        if (currentElement.checked) {
            answer = currentElement.id
        }
    });
    return answer
}
checkAnswer();

var score = 0;
function submit() {
    var checkedAnswer = checkAnswer();
    console.log(checkedAnswer);
    if (checkedAnswer == quiz[questionCount].ans) {
        score++;
    };
    questionCount++;

    deSelect();
    if (questionCount < quiz.length) {
        loadQuestion();
    } else {
        showScore.innerHTML = `
        <h3> you scored ${score}/${quiz.length} </h3>
        <buttton class = "btn" onclick ="location.reload()">Play Again</button>`;
        showScore.classList.remove('scoreArea');
    }

}
