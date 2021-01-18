export default class UI {
    static printCategories(categories) {
        let content = document.getElementById('category');

        categories.forEach(category => {
            content.innerHTML += `<option value="${category.id}">${category.name}</option>`;
        });
    }
    static printQuestions(questions) {
        let content = document.getElementById('questions-container');
        content.innerHTML = '';

        if(questions.length == 0) {
            content.innerHTML = `<div class="alert alert-danger" role="alert">
            There are not enough questions to match your selections. Please choose different options!
          </div>`
        } else {
            questions.forEach((element, index) => {
                let cAnswer = element.correct_answer;
                let iAnswers = element.incorrect_answers;
                let allAnswers = iAnswers.concat(cAnswer);
                console.log(cAnswer);
                let randomAnswers = allAnswers.sort(() => Math.random() - 0.5);
                console.log(randomAnswers);
    
                content.innerHTML += `<div class="col-md-6 mb-4">
                                    <div class="card h-100">
                                        <div class="card-body">
                                        ${element.question}
                                        ${this.printAnswers(randomAnswers, index, cAnswer)}
                                        </div>
                                    </div>
                                </div>`
            }); 
            content.innerHTML += `<div class="d-flex justify-content-center"><button class="btn btn-primary mt-2 mb-4 px-4 py-2" type="submit">Submit Answers</button></div>`;
        }
    }
    static printAnswers(randomAnswers, index, cAnswer) {
        let result = '';
        randomAnswers.forEach((answer) => {
            if(answer == cAnswer) {
                result += `<div class="form-check">
                    <input class="form-check-input" type="radio" name="group${index}" id="${answer}${index}" value="correctGroup${index}" required>
                    <label class="form-check-label" for="${answer}${index}">
                        ${answer}
                    </label>
                </div>`
            } else {
                result += `<div class="form-check">
                    <input class="form-check-input" type="radio" name="group${index}" id="${answer}${index}" value="incorrectGroup${index}" required>
                    <label class="form-check-label" for="${answer}${index}">
                        ${answer}
                    </label>
                </div>`
            }
        });
        return result;
    }
    static printScore(counter, length) {
        let content = document.getElementById('score-container');

        content.innerHTML = `<div class="card border-success mb-3 mt-4 mx-auto" style="max-width: 18rem;">
            <div class="card-body text-success text-center">
            <h5 class="card-title">Your Score: ${counter}/${length}</h5>
            <p class="card-text">Correct answers: ${counter} <br> Wrong answers: ${length - counter} <br> Total answers: ${length}</p>
            </div>
        </div>`
    }
}