let title = "What is the caapital city of Jordan";
let options = ["Tashkent", "Amaan", "Kuwait City", "Nairobi"];
let correctAnswerIndex = 1;

function isAnswerCorrect(answerIndex) {
  return answerIndex === correctAnswerIndex;
}

function getCorrectAnswer() {
  return options[correctAnswerIndex];
}

console.group(title);
console.log(title);
console.log(options);
console.log(isAnswerCorrect(0));
console.log(isAnswerCorrect(1));
console.log(getCorrectAnswer());
console.groupEnd();

// organizing

let data = {
  title: "What is the caapital city of Jordan",
  options: ["Tashkent", "Amaan", "Kuwait City", "Nairobi"],
  correctAnswerIndex: 1,
  isAnswerCorrect(answerIndex) {
    return answerIndex === data.correctAnswerIndex;
  },
  getCorrectAnswer () {
    return data.options[data.correctAnswerIndex];
  },
};

console.group(data.title);
console.log(data.title);
console.log(data.options);
console.log(data.isAnswerCorrect(1));
console.log(data.isAnswerCorrect(0));
console.log(data.getCorrectAnswer());
console.groupEnd();

// using function to create object

function createObj (title,options,correctAnswerIndex){
    let ques = {};
    ques.title = title;
    ques.options = options;
    ques.correctAnswerIndex = correctAnswerIndex;
    ques.isAnswerCorrect = function(answerIndex){
        return answerIndex === ques.correctAnswerIndex;
    };
    ques.getCorrectAnswer = function() {
        return options[ques.correctAnswerIndex];
    }
    return ques;
}


let test = createObj (
    'Where is the capital of Jordan',
     ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
     1,
);
// const testData = {
//     title: 'Where is the capital of Jordan',
//     options: ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
//     correctAnswerIndex: 1,
//   };

console.group(test.title);
console.log(test.title);
console.log(test.options);
console.log(test.isAnswerCorrect(1));
console.log(test.isAnswerCorrect(0));
console.log(test.getCorrectAnswer());
console.groupEnd();

// using this
function createObjThis (title,options,correctAnswerIndex){
    let ques = {};
   ques.title = title;
   ques.options = options;
   ques.correctAnswerIndex = correctAnswerIndex;
   ques.isAnswerCorrect = function(answerIndex){
        return answerIndex === this.correctAnswerIndex;
    };
    ques.getCorrectAnswer = function() {
        return options[this.correctAnswerIndex];
    }
    return ques;
}

let testData1 = createObjThis (
    'Where is the capital of Jordan',
     ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
     1,
);

let testData2 = createObjThis (
    'Where is the capital of France',
     ['London', 'Paris', 'Berlin', 'Nairobi'],
     1,
);

console.group(testData1.title);
console.log(testData1.title);
console.log(testData1.options);
console.log(testData1.isAnswerCorrect(1));
console.log(testData1.isAnswerCorrect(0));
console.log(testData1.getCorrectAnswer());
console.groupEnd();

console.group(testData2.title);
console.log(testData2.title);
console.log(testData2.options);
console.log(testData2.isAnswerCorrect(1));
console.log(testData2.isAnswerCorrect(0));
console.log(testData2.getCorrectAnswer());
console.groupEnd();