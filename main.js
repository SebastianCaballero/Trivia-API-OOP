import Request from './classes/Request.js';
import UI from './classes/UI.js';
import Result from './classes/Result.js';

const form = document.querySelector('#form-filter');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    Request.getQuestions()
        .then(response => response.json())
        .then(data => UI.printQuestions(data.results))
    ;
    let score = document.getElementById('score-container');
    score.innerHTML = '';
});

Request.getCategories()
    .then(response => response.json())
    .then(data => UI.printCategories(data.trivia_categories))
;

const options = document.querySelector('#qa-container');
options.addEventListener('submit', (event) => {
    event.preventDefault();
    let [counter, length] = Result.getAnswers();
    UI.printScore(counter, length);
});

