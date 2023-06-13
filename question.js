function Question(text, answers, trueAnswer) {
  this.text = text;
  this.answers = answers;
  this.trueAnswer = trueAnswer;
}

Question.prototype.checkAnswer = function (answer) {
  return answer === this.trueAnswer;
};

let quests = [
  new Question(
    "1-which is js package management application?",
    { a: "Node.js", b: "Typescript", c: "Npm", d: "Nugget" },
    "c"
  ),
  new Question(
    "2-which is .net package management application?",
    { a: "nuget", b: "Typescript", c: "Npm", d: "Nugget" },
    "a"
  ),
  new Question(
    "3-which is .net package management application?",
    { a: "nuget", b: "Typescript", c: "Npm", d: "Nugget" },
    "a"
  ),
  new Question(
    "4-which is .net package management application?",
    { a: "nuget", b: "Typescript", c: "Npm", d: "Nugget" },
    "a"
  ),
];
