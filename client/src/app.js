const QuizModel = require('./models/model.js');
const QuestionFetcher = require('./models/question_fetcher.js');
const QuizView = require('./views/quiz_view.js');
const QuizSelectView = require('./views/quiz_select_view.js');
const ResultView = require('./views/result_view.js');

document.addEventListener('DOMContentLoaded', () => {

  const quizSelectViewElement = document.querySelector('nav.circle-menu');
  const quizSelectView = new QuizSelectView(quizSelectViewElement);
  quizSelectView.bindEvents();

  const quizViewElement = document.querySelector('#quiz');
  const quizView = new QuizView(quizViewElement);
  quizView.bindEvents();

  const resultViewContainer = document.querySelector('div.checkAnswers');
  const resultView = new ResultView(resultViewContainer);
  resultView.bindEvents();

  const questionFetcher = new QuestionFetcher();
  questionFetcher.getData();
  questionFetcher.bindEvents();

});
