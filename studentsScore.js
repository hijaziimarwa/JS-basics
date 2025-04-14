const students = [
  {name:"Ahmad", score:[40, 60, 75]},
  {name:"Ali", score:[70, 65, 80]},
  {name:"Sara", score:[90, 95, 100]}
];
console.log(students); 

function calculateAverage(){
  let result=[];
  for(let i=0;i<students.length;i++){
    let sum = students[i].score.reduce((acc, score) => acc + score, 0);
    let avg = sum / students[i].score.length;
    console.log(`Average score of ${students[i].name} is ${avg}`);
    let studentObjects = {
      name: students[i].name,
      average: avg
    };
    result.push(studentObjects);
  }
  return result;
}

function assignGrade(){
 for(let i=0;i<students.length;i++){
    if(result[i].average >= 80){
      console.log(`${result[i].name} has an A grade`);
    }
    else if(result[i].average >= 60 && result[i].average < 80){
      console.log(`${result[i].name} has a B grade`);
    }
    
    else if(result[i].average < 60){
      console.log(`${result[i].name} has a C grade`);
    }
}}
function generateReports(){

}
let result=calculateAverage();
console.log(result);
assignGrade();
