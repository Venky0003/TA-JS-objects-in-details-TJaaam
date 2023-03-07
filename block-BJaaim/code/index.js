
class Question {
  constructor(title, options = [], correctAnswer) {
    this.title = title;
    this.options = options;
    this.correctAnswer = correctAnswer;
  }

  isCorrect(answer) {
    return this.correctAnswer === answer;
  }

  createUI() {
    let container = document.createElement("div");
    container.classList.add("question-container");

    let titleElm = document.createElement("h2");
    titleElm.innerText = this.title;
    container.appendChild(titleElm);

    let optionsElm = document.createElement("ul");
    optionsElm.classList.add("options");
    this.options.forEach((opt) => {
      let option = document.createElement("li");
      option.textContent = opt;
      option.addEventListener("click", () => {
        if (this.isCorrect(opt)) {
          option.classList.add("correct");
        } else {
          option.classList.add("incorrect");
        }
        optionsElm
          .querySelectorAll("li")
          .forEach((li) => li.removeEventListener("click"));
        onAnswer(this.isCorrect(opt));
      });
      optionsElm.appendChild(option);
    });
    container.appendChild(optionsElm);
    return container;
  }
}

//   class Quiz {
//     constructor(allQuestions = []) {
//       this.allQuestions = allQuestions;
//       this.activeIndex = 0;
//       this.score = 0;
//       this.quizContainer = document.getElementById('quiz-container');
//     }

//     nextQuestion() {
//       this.activeIndex++;
//       if (this.activeIndex >= this.allQuestions.length) {
//         this.updateScore();
//       } else {
//         this.createUI();
//       }
//     }
//     createUI(){
//         let currentQuestion = this.allQuestions[this.activeIndex];
//         let container = document.createElement('div');
//         container.classList.add('question-container');

//         let titleElm = document.createElement('h2');
//         titleElm.innerText = currentQuestion.title;
//         container.appendChild(titleElm);

//         let optionsElm = document.createElement('ul');
//         optionsElm.classList.add('options');
//         currentQuestion.options.forEach((opt, index)=>{
//             let option = document.createElement('li');
//             option.textContent = opt;
//             option.addEventListener('click', ()=>{
//                 if(currentQuestion.isCorrect(index)) {
//                     option.classList.add('correct');
//                 } else {
//                     option.classList.add('incorrect');
//                 }
//                 optionsElm.querySelectorAll('li').forEach(li => li.removeEventListener('click'));
//                 container.appendChild(nextButton);
//             })
//             optionsElm.appendChild(option);
//         });
//         container.appendChild(optionsElm);

//         let nextButton = document.createElement('button');
//         nextButton.textContent = 'Next';
//         nextButton.addEventListener('click', ()=>{
//             container.innerHTML = '';
//             this.nextQuestion();
//         });

//         return container;
//     }

//     // createUI() {
//     //   let currentQuestion = this.allQuestions[this.activeIndex];
//     //   let questionUI = currentQuestion.createUI((isCorrect) => {
//     //     if (isCorrect) {
//     //       this.updateScore();
//     //     }
//     //     this.nextQuestion();
//     //   });
//     //   this.quizContainer.innerHTML = '';
//     //   this.quizContainer.appendChild(questionUI);
//     // }

//     updateScore() {
//       this.score++;
//     }
//   }

class Quiz {
  constructor(allQuestions = []) {
    this.allQuestions = allQuestions;
    this.activeIndex = 0;
    this.score = 0;
  }
  nextQuestion() {
    this.activeIndex++;
    if (this.activeIndex >= this.allQuestions.length) {
      this.updateScore();
    } else {
      this.createUI();
    }
  }
  createUI() {
    let currentQuestion = this.allQuestions[this.activeIndex];
    let container = document.createElement("div");
    container.classList.add("question-container");

    let titleElm = document.createElement("h2");
    titleElm.innerText = currentQuestion.title;
    container.appendChild(titleElm);

    let optionsElm = document.createElement("ul");
    optionsElm.classList.add("options");
    currentQuestion.options.forEach((opt, index) => {
      let option = document.createElement("li");
      option.textContent = opt;
      option.addEventListener("click", () => {
        if (currentQuestion.isCorrect(index)) {
          option.classList.add("correct");
        } else {
          option.classList.add("incorrect");
        }
        optionsElm
          .querySelectorAll("li")
          .forEach((li) => li.removeEventListener("click"));
        container.appendChild(nextButton);
      });
      optionsElm.appendChild(option);
    });
    container.appendChild(optionsElm);

    let nextButton = document.createElement("button");
    nextButton.textContent = "Next";
    nextButton.addEventListener("click", () => {
      container.innerHTML = "";
      this.nextQuestion();
    });

    return container;
  }
}

const question1 = new Question(
  "What is the capital of France?",
  ["Paris", "London", "Madrid", "Berlin"],
  "Paris"
);
const question2 = new Question(
  "What is the largest country in the world?",
  ["China", "Russia", "USA", "Canada"],
  "Russia"
);
const question3 = new Question(
  "What is the smallest planet in our solar system?",
  ["Venus", "Mars", "Mercury", "Neptune"],
  "Mercury"
);

const allQuestions = [question1, question2, question3];
const quiz = new Quiz(allQuestions);
quiz.createUI();
