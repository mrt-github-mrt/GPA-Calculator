// calculateGPA: Returns letter GPA for a set of letter grades.
// Marc MRT

function calculateGPA(arr) {

    // arr is assumed to be array of letter grades A,B or C.

    let gpaSum = 0;
    let gpaCount = 0;
    let gpaAvg = 0;
    let gpaLetter = 'D';

    // Calculate numeric GPA

    for (let i = 0; i < arr.length; i++) {
        let grade = arr[i].toUpperCase();
        if (grade === 'A') {
            gpaSum += 100;
            gpaCount++;
        } 
        else if (grade === 'B') {
            gpaSum += 80;
            gpaCount++;
        }
        else if (grade === 'C') {
            gpaSum += 70;
            gpaCount++;
        }
        else {
            console.log("Invalid grade encountered at array index " + i);
        }  
    }

    // Determine letter GPA

    if (gpaCount > 0) {
        gpaAvg = (gpaSum / gpaCount);
        if (gpaAvg == 100) {
            gpaLetter = 'A';
        }
        else if (gpaAvg >= 80) {
            gpaLetter = 'B';
        }
        else if (gpaAvg >= 70) {
            gpaLetter = 'C';
        } 
    } 
    else {
        console.log("No grades to average.");
    }
    return gpaLetter;
}
 
let myGrades1 = ['A','B','C','B','A'];

// let myGrades2 = ['A','C'];  
// let myGrades3 = ['C'];

console.log("Your GPA is " + calculateGPA(myGrades1));
// console.log("Your GPA is " + calculateGPA(myGrades2));
// console.log("Your GPA is " + calculateGPA(myGrades3));

