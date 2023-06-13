function Quiz(quests) {
  this.quests = quests;
  this.questIndex = 0;
  this.totalTrueAnswers = 0;
  this.passedQuestion = 0;
}

Quiz.prototype.comeQuest = function () {
  return this.quests[this.questIndex];
};
