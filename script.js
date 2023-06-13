const ui = new UI();
const quiz = new Quiz(quests);
let passed = true;

ui.btn_start.addEventListener("click", function () {
  startTime(10);
  ui.quiz_box.classList.add("active");
  ui.getQuestion(quiz.comeQuest());
  ui.questionNumber(quiz.questIndex + 1, quiz.quests.length);
});

ui.btn_next.addEventListener("click", function () {
  if (passed) {
    quiz.passedQuestion += 1;
  }
  passed = true;
  if (quiz.quests.length != quiz.questIndex + 1) {
    quiz.questIndex += 1;
    clearInterval(counter);
    startTime(10);
    ui.getQuestion(quiz.comeQuest());
    ui.questionNumber(quiz.questIndex + 1, quiz.quests.length);
  } else {
    clearInterval(counter);
    ui.quiz_box.classList.remove("active");
    ui.score_board.classList.add("active");
    ui.showScore(
      quiz.quests.length,
      quiz.totalTrueAnswers,
      quiz.passedQuestion
    );
  }
});

function optionSelected(event) {
  clearInterval(counter);
  passed = false;
  let answ = event.target.querySelector("span b").textContent;
  let qst = quiz.comeQuest();
  const trueAnswer2 = qst.trueAnswer;

  if (qst.checkAnswer(answ)) {
    quiz.totalTrueAnswers += 1;
    event.target.classList.add("correct");
    event.target.insertAdjacentHTML("beforeend", ui.correctIcon);
  } else {
    event.target.classList.add("incorrect");
    event.target.insertAdjacentHTML("beforeend", ui.inCorrectIcon);
    const trueAnswerElement = ui.option_list.querySelector(
      `.option.${trueAnswer2}`
    );
    trueAnswerElement.classList.add("correct");
    trueAnswerElement.insertAdjacentHTML("beforeend", ui.correctIcon);
  }

  for (let i = 0; i < ui.option_list.children.length; i++) {
    ui.option_list.children[i].classList.add("disabled");
  }
}

ui.btn_tryAgain.addEventListener("click", function () {
  window.location.reload();
});

let counter;
function startTime(time) {
  counter = setInterval(timer, 1000);

  function timer() {
    // textContent =  içinde yazan stringe ulaşma
    ui.time.textContent = time;
    time--;

    if (time < 0) {
      clearInterval(counter);

      ui.remaining_time.textContent = "Time is over";

      let answer = quiz.comeQuest().trueAnswer;

      for (let option of ui.option_list.children) {
        if (option.querySelector("span b").textContent == answer) {
          option.classList.add("correct");
          option.insertAdjacentHTML("beforeend", ui.correctIcon);
        }

        option.classList.add("disabled");
      }
    }
  }
}

// clear interval set intervalı sıfırlamaya yarıyor zamanı tekrar başlatmak istersem clear interval(counter) yazmam gerekli
