const employees = [
  { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
  { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
  { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
  { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
];

function totalSalary(salaries){
  let total= 0;
  for(const salary of salaries){
    let postIncrement = (salary.increment * salary.experience) + salary.starting;
    // console.log(postIncrement);
    if(salary.experience === 0){
      postIncrement = postIncrement + salary.increment;
    }
    total = postIncrement + total;
  }
  return total;
}

const result = totalSalary(employees);
console.log("The total salary provided by the company in a month is:", result, "BDT");