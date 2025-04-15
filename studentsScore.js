const students = [
  { name: 'Ahmad', score: [40, 60, 75] },
  { name: 'Ali', score: [70, 65, 80] },
  { name: 'Sara', score: [90, 95, 100] },
];  //1

function calculateAverage() {
  let result = [];  // O(1) since we are initializing an empty array
  for (let i = 0; i < students.length; i++) { // O(n) since we iterate over the students array
    let sum = students[i].score.reduce((acc, score) => acc + score, 0); // O(n) since reduce iterates over the scores
    let avg = sum / students[i].score.length; // O(1) since the number of scores is constant
    // console.log(`Average score of ${students[i].name} is ${avg}`);
    let studentObjects = {
      name: students[i].name,
      average: avg,
    };// O(1) since we are creating an object with constant properties
    result.push(studentObjects); // O(1) since we are pushing an object to the result array
  }
  return result;// O(1) since we are returning the result array
// Overall time complexity: O(n^2) since we have a nested loop (reduce inside the for loop)
}

function assignGrade() {
  for (let i = 0; i < result.length; i++) {
    if (result[i].average >= 80) {
      result[i].grade = 'A';
    } else if (result[i].average >= 60 && result[i].average < 80) {
      result[i].grade = 'B';
    } else if (result[i].average < 60) {
      result[i].grade = 'C';
    }
  }
}

let result = calculateAverage();
assignGrade();
console.log(result);
