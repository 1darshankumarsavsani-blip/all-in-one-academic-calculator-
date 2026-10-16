function calculateSPI(subjects){

let totalCredits = 0;
let totalPoints = 0;

subjects.forEach(sub => {

totalCredits += sub.credit;

totalPoints +=
sub.credit * sub.gradePoint;

});

return (
totalPoints / totalCredits
).toFixed(2);

}