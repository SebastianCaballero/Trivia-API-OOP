export default class Result {
    static getAnswers() {
        let counter = 0;
        let length = document.getElementById('questions').value;

        for(let i = 0; i < length; i++) {
            let rigthWrong = document.querySelector(`input[name="group${i}"]:checked`).value;
            if(rigthWrong === `correctGroup${i}`) {
                counter += 1;
            }
        }
        return [counter, length];
    }
}