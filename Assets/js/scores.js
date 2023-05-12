// Get all users's initial and score from local storage 
var lastGrade = JSON.parse(localStorage.getItem("userScore"));
// create and append local storage information to html 
for (let i = 0; i < lastGrade.length; i++) {
    const record = document.createElement('li');
    record.textContent = lastGrade[i].initial + ' - ' + lastGrade[i].grade;
    document.getElementById('highscores').appendChild(record);
}