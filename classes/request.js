export default class Request {
    static getCategories() {
        return fetch('https://opentdb.com/api_category.php');
    }
    static getQuestions() {
        let result = this.getFilters();
        return fetch(`https://opentdb.com/api.php?amount=${result[0]}&category=${result[1]}&difficulty=${result[2]}&type=${result[3]}`);
    }
    static getFilters() {
        let qResult = document.getElementById('questions').value;
        let cResult = document.getElementById('category').value;
        let dResult = document.getElementById('difficulty').value;
        let tResult = document.getElementById('type').value;
        return [qResult, cResult, dResult, tResult];
    }
}

// https://opentdb.com/api.php?amount=10&category=19&difficulty=medium&type=boolean