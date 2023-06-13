function UI() {
  (this.btn_start = document.querySelector(".btn_start")),
    (this.btn_tryAgain = document.querySelector(".try_again")),
    (this.btn_next = document.querySelector("#next-question")),
    (this.quiz_box = document.querySelector(".quiz_box")),
    (this.score_board = document.querySelector(".score_board")),
    (this.question_text = document.querySelector(".question_text")),
    (this.option_list = document.querySelector(".option_list")),
    (this.correctIcon = '<div class="icon"><i class="fas fa-check"></i></div>'),
    (this.inCorrectIcon =
      '<div class="icon"><i class="fas fa-times"></i></div>'),
    (this.question_index = document.querySelector(".quiz_box .question_index")),
    (this.footer = document.querySelector(".footer"));
  this.finish_quiz = document.querySelector("#finish_quiz");
  (this.option = document.querySelectorAll(".option")),
    (this.remaining_time = document.querySelector(".remaining_time"));
  this.time = document.querySelector(".time");
}

UI.prototype.getQuestion = function (quest) {
  let questions = `
  <span>${quest.text}</span>
  `;

  let options = ``;

  for (let answer1 in quest.answers) {
    options += `
    <div class="option ${answer1}"> 
    <span><b>${answer1}</b>:${quest.answers[answer1]} </span>
    </div>
    `;
  }

  this.question_text.innerHTML = questions;
  this.option_list.innerHTML = options;
  this.option = this.option_list.querySelectorAll(".option");

  for (opt of this.option) {
    opt.addEventListener("click", optionSelected);
  }
};

UI.prototype.questionNumber = function (questionOfNumber, totalQuestion) {
  let tag = ` <div class="badge bg-warning">${questionOfNumber} / ${totalQuestion}</div>`;
  this.question_index.innerHTML = tag;
};

UI.prototype.showScore = function (
  totalQuest,
  totalTrueAnswer,
  totalPassedQuestion
) {
  let tag = `${totalTrueAnswer} correct out of ${totalQuest} questions, passed questions ${totalPassedQuestion}`;

  document.querySelector(".score_board .score_text").innerHTML = tag;
};
