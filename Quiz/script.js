// quize sample data
const quizData = [
  {
    question: "What is the most popular sport worldwide?",
    options: ["Soccer", "Basketball", "Cricket", "Badminton"],
    answerIndex: 0
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Venus", "Mars", "Jupiter", "Saturn"],
    answerIndex: 1
  },
  {
    question: "Who invented the telephone?",
    options: ["Albert Einstein", "Thomas Edison", "Alexander Graham Bell", "Isaac Newton"],
    answerIndex: 2
  },
  {
    question: "What is the largest ocean on Earth?",
    options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
    answerIndex: 3
  },
  {
    question: "How many continents are there?",
    options: ["5", "6", "7", "8"],
    answerIndex: 2
  },
  {
    question: "Which gas do plants absorb from the atmosphere?",
    options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
    answerIndex: 1
  },
  {
    question: "What is the capital of Japan?",
    options: ["Tokyo", "Osaka", "Kyoto", "Nagoya"],
    answerIndex: 0
  },
  {
    question: "Which animal is known as the King of the Jungle?",
    options: ["Tiger", "Elephant", "Lion", "Bear"],
    answerIndex: 2
  },
  {
    question: "Which day is celebrated as Earth Day?",
    options: ["June 5", "April 22", "March 8", "December 25"],
    answerIndex: 1
  },
  {
    question: "How many players are there in a soccer team on the field?",
    options: ["9", "10", "11", "12"],
    answerIndex: 2
  }
];
// vars
let questionIndex = 0;
let score = 0;
let timer;
let timeLeft = 30;
// selections

let scoreBox = document.querySelector("#scoreBox");
let optionsBox = document.querySelector(".options");
let questionText = document.querySelector("#question");
let timerDisplay = document.querySelector("#timer");
let nextBtn = document.querySelector(".next-btn button");
let navCount = document.querySelector(".left-nav");


// load question fnc
function loadQuestion(index) {
  document.querySelector(".question-box h2 span").innerHTML = index + 1;
  questionText.innerHTML = quizData[index].question;
  navCount.innerHTML = (index + 1) + " of " + quizData.length;

  loadOptions(index);
  resetTimer();
}

// load options fnc
function loadOptions(index) {
  optionsBox.innerHTML = "";

  quizData[index].options.forEach((option, i) => {
    optionsBox.innerHTML += `
            <div class="option" data-index="${i}">
                <h5>${option}</h5>
                <i class=""></i>
            </div>
        `;
  });

  document.querySelectorAll(".option").forEach(option => {
    option.addEventListener("click", selectOption);
  });

  scoreBox.innerHTML = score + " of " + quizData.length;
  let progress = document.querySelector(".progress")
  progress.style.width=100*(score/quizData.length)+"%"
}

// timer
function startTimer() {
  timer = setInterval(() => {
    timeLeft--;
    timerDisplay.textContent = timeLeft;

    if (timeLeft <= 0) {
      clearInterval(timer);
      lockOptions();
      showCorrectAnswer();
    }
  }, 1000);
}

//reset timer
function resetTimer() {
  clearInterval(timer);
  timeLeft = 30;
  timerDisplay.textContent = timeLeft;
  startTimer();
}

// get selected option functionb
function selectOption(e) {
  let selected = e.currentTarget;
  let selectedIndex = selected.getAttribute("data-index");
  let correctIndex = quizData[questionIndex].answerIndex;

  clearInterval(timer);
  lockOptions();

  if (selectedIndex == correctIndex) {
    selected.classList.add("correct");
    selected.querySelector("i").classList = "ri-check-fill";

    score++;
    scoreBox.innerHTML = score + " / " + quizData.length;
  }
  else {
    selected.classList.add("wrong");
    selected.querySelector("i").classList = "ri-close-fill";
    showCorrectAnswer();
  }
}

// correct option style
function showCorrectAnswer() {
  let correctIndex = quizData[questionIndex].answerIndex;
  let correctOption = document.querySelector(`.option[data-index="${correctIndex}"]`);

  correctOption.classList.add("correct");
  correctOption.querySelector("i").classList = "ri-check-fill";
}

// disabling clicking
function lockOptions() {
  optionsBox.style.pointerEvents = "none";
}

// enabling clicking
function unlockOptions() {
  optionsBox.style.pointerEvents = "auto";
}


// next btn
nextBtn.addEventListener("click", () => {
  if (questionIndex < quizData.length - 1) {
    questionIndex++;
    unlockOptions();
    loadQuestion(questionIndex);
  } else {
    showFinishScreen();
  }
});


// end quiz
function showFinishScreen() {
  document.querySelector("main").innerHTML = `
        <div class="finish-screen" style="text-align:center; color:white;">
            <h1>Quiz Completed!</h1>
            <h2>Your Score: ${score} / ${quizData.length}</h2>

            <button onclick="location.reload()" 
            style="margin-top:20px; padding:12px 20px; border:none;
            background:#ff7a00; color:white; border-radius:10px; font-size:16px;">
                Restart Quiz
            </button>
        </div>
    `;
}


//call
loadQuestion(questionIndex);


