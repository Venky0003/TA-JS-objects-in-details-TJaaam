let form = document.querySelector('form');
let prev = document.querySelector('.prev');
let next = document.querySelector('.next');
let quizElm = document.querySelector('.quiz');
let totalQuestions =  document.querySelector('header p');
let showResults =  document.querySelector('.show_result');

class Question {
  constructor(title, options = [], correctAnswerIndex) {
    this.title = title;
    this.options = options;
    this.correctAnswerIndex = correctAnswerIndex;
  }

  isCorrect(answer) {
    return this.options[this.correctAnswerIndex] === answer;
  }
  getCorrectAnswer() {
    return this.options[this.correctAnswerIndex];
  }
}

class Quiz {
  constructor(allQuestions = [], score = 0) {
    this.allQuestions = allQuestions;
    this.score = score;
    this.activeIndex = 0;
  }
  incrementScore(){
    this.score = this.score + 1;
  }
  addQuestion(title, options, answerIndex) {
    let question = new Question(title, options, answerIndex);
    this.allQuestions.push(question);
  }
  nextQuestion() {
    this.activeIndex = this.activeIndex + 1;
    this.createUI();
  }
  prevQuestion(){
    this.activeIndex = this.activeIndex - 1;
    this.createUI();
  }
  handleButtons(){
    if(this.activeIndex === 0){
        prev.style.visibility = 'hidden';
    } else if(this.activeIndex === this.allQuestions.length - 1){
        next.style.visibility = 'hidden';
        showResults.style.visibility = "visible"
    } else {
    prev.style.visibility = 'visible';
    next.style.visibility = 'visible';
    showResults.style.visibility = "hidden"
    }
  }
  createUI() {
    quizElm.innerHTML = "";
    let activeQuestion = this.allQuestions[this.activeIndex];
    let form = document.createElement("form");
    let fieldset = document.createElement("fieldset");
    let legend = document.createElement("legend");
    legend.innerText = activeQuestion.title;
    let optionsElm = document.createElement("div");
    optionsElm.classList.add("options");
    let buttonWrapper = document.createElement("div");
    let button = document.createElement("button");
    button.type = "submit";
    button.innerText = "Submit";
    button.classList.add('submit')
    buttonWrapper.append(button);

    activeQuestion.options.forEach((option,index)=>{
        let input = document.createElement('input');
        input.id = `option-${index}`;
        input.type = 'radio';
        input.name = 'options';
        input.value = option;

        let label =document.createElement('label');
        label.for = `option-${index}`;
        label.innerText = option;
        
        form.addEventListener('submit', (event) =>{
            event.preventDefault();
            if(input.checked) {
                if(activeQuestion.isCorrect(input.value)) {
                    this.incrementScore();
                }
            }
        })

        optionsElm.append(input, label);
    })
    this.handleButtons();
    totalQuestions.innerText = `Total Questions: ${this.allQuestions.length}`
    fieldset.append(legend, optionsElm, buttonWrapper);
    form.append(fieldset);
    quizElm.append(form)
  }
}

function init(){
    let quiz = new Quiz();
quizCollection.forEach((question) => {
  quiz.addQuestion(
    question.title,
    question.options, 
    question.answerIndex
    );
});

quiz.createUI();

next.addEventListener(
    'click', quiz.nextQuestion.bind(quiz));

prev.addEventListener(
    'click', quiz.prevQuestion.bind(quiz));

showResults.addEventListener('click', () => {
    alert(`Your score is ${quiz.score}`)
});

}

init();
