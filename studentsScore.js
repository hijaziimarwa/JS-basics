const students = [
  {name:"Ahmad", score:[40, 60, 75]},
  {name:"Ali", score:[70, 65, 80]},
  {name:"Sara", score:[90, 95, 100]}
];
console.log(students); 

function calculateAverage(){
  
  for(let i=0;i<students.length;i++){
      let sum=0;
      for(let j=0;j<students[i].score.length;j++){
        sum+=students[i].score[j];
      }
      let avg=sum/students[i].score.length;
    console.log(`Average score of ${students[i].name} is ${avg}`);
  };
  }
function generateReports(){

}
calculateAverage();

