import Request from './classes/request.js';
import UI from './classes/UI.js';

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
    let [counter, length] = Request.getAnswers();
    UI.printScore(counter, length);
});

