const readLineSync = require("readline-sync");
const userName = readLineSync.question("What is your name? ");
console.log(`Hello ${userName.toUpperCase()}!!!
Welcome!!
WHAT DO YOU KNOW ABOUT INDIAN CRICKET TEAM 😊`);

var Score = 0;
const helper = function (question, answer) {
  var userAns = readLineSync.question(question);

  if (userAns.toLowerCase() === answer.toLowerCase()) {
    console.log("Right!!");
    Score++;
  } else {
    console.log("Wrong answer!");
  }
};

var questions = [
  {
    Question: "who is current captain of Indian cricket team? ",
    Answer: "rohit sharma",
  },
  {
    Question: "Who led the indian team to 2011 world cup victory? ",
    Answer: "dhoni",
  },
  {
    Question: "Who is India's most run scorer in ODIs? ",
    Answer: "sachin",
  },
  {
    Question: "Who has hit 6 sixes in an over of T20I? ",
    Answer: "yuvraj singh",
  },
  {
    Question: "Who is the leading run scorer in T20Is for india ?",
    Answer: "virat kohli",
  },
];

for (var i = 0; i < questions.length; i++) {
  var currentQuestion = questions[i];
  // helper(questions[i].Question, questions[i].Answer);
  helper(currentQuestion.Question, currentQuestion.Answer);
}

if (Score > 0) {
  console.log(`Great!! Your score is: ${Score}`);
} else {
  console.log("Never mind! Your score is", Score);
}
