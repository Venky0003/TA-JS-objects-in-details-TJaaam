
// Prototypal pattern
let questionMethods = {
    isAnswerCorrect(answerIndex){
       return answerIndex === this.correctAnswerIndex;
    },
    getCorrectAnswer(){
        return this.options[this.correctAnswerIndex];
    }
}


function question(title,options,correctAnswerIndex){
    let questions = Object.create(questionMethods)
    questions.title = title;
    questions.options = options;
    questions.correctAnswerIndex = correctAnswerIndex;

    return questions
}

let firstQ = question(
      'Where is the capital of Jordan',
      ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
      1
    );
let secondQ = question(
      'Where is the capital of Jamaica',
      ['Tashkent', 'Amaan', 'Kingston', 'Nairobi'],
      2
    );    

console.group(firstQ.title);
console.log(firstQ.title);
console.log(firstQ.options);
console.log(firstQ.isAnswerCorrect(0));
console.log(firstQ.isAnswerCorrect(1));
console.log(firstQ.getCorrectAnswer());
console.groupEnd();

console.group(secondQ.title);
console.log(secondQ.title);
console.log(secondQ.options);
console.log(secondQ.isAnswerCorrect(2));
console.log(secondQ.isAnswerCorrect(1));
console.log(secondQ.getCorrectAnswer());
console.groupEnd();

// Pseudoclassical Pattern using new and  function prototype

function Questions(title,options,correctAnswerIndex){
    this.title = title;
    this.options = options;
    this.correctAnswerIndex = correctAnswerIndex;

}

Questions.prototype = {
    isAnswerCorrect(answerIndex){
        return answerIndex === this.correctAnswerIndex;
     },
     getCorrectAnswer(){
         return this.options[this.correctAnswerIndex];
     }
}

let firstQuest = new Questions(
    'Where is the capital of Jordan',
    ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
    1
  );

  console.group(firstQuest.title);
  console.log(firstQuest.title);
  console.log(firstQuest.options);
  console.log(firstQuest.isAnswerCorrect(0));
  console.log(firstQuest.isAnswerCorrect(1));
  console.log(firstQuest.getCorrectAnswer());
  console.groupEnd();  

let secondQuest = new Questions(
      'Where is the capital of Jamaica',
      ['Tashkent', 'Amaan', 'Kingston', 'Nairobi'],
      2
    );      


    console.group(secondQuest.title);
    console.log(secondQuest.title);
    console.log(secondQuest.options);
    console.log(secondQuest.isAnswerCorrect(0));
    console.log(secondQuest.isAnswerCorrect(1));
    console.log(secondQuest.getCorrectAnswer());
    console.groupEnd();   
    
 // using class
 
 class Question {
    constructor(title,options,correctAnswerIndex){

        this.title = title;
        this.options = options;
        this.correctAnswerIndex = correctAnswerIndex;
    }
    isAnswerCorrect(answerIndex){
        return answerIndex === this.correctAnswerIndex;
     }
     getCorrectAnswer(){
         return this.options[this.correctAnswerIndex];
     }

 }

 let firstQuestion = new Question(
    'Where is the capital of Jordan',
    ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
    1
  );

  console.group(firstQuestion.title);
  console.log(firstQuestion.title);
  console.log(firstQuestion.options);
  console.log(firstQuestion.isAnswerCorrect(0));
  console.log(firstQuestion.isAnswerCorrect(1));
  console.log(firstQuestion.getCorrectAnswer());
  console.groupEnd();      


  let secondQuestion = new Question(
      'Where is the capital of Jamaica',
      ['Tashkent', 'Amaan', 'Kingston', 'Nairobi'],
      2
    ); 

    console.group(secondQuestion.title);
    console.log(secondQuestion.title);
    console.log(secondQuestion.options);
    console.log(secondQuestion.isAnswerCorrect(2));
    console.log(secondQuestion.isAnswerCorrect(1));
    console.log(secondQuestion.getCorrectAnswer());
    console.groupEnd();  