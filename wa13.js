// Problem 1
let employee1 = {
    firstName: "Sam",
    department: "Tech",
    designation: "Manager",
    salary: 40000,
    raiseEligible: true
  };
  
  let employee2 = {
    firstName: "Mary",
    department: "Finance",
    designation: "Trainee",
    salary: 18500,
    raiseEligible: true
  };
  
  let employee3 = {
    firstName: "Bill",
    department: "HR",
    designation: "Executive",
    salary: 21200,
    raiseEligible: false
  };
  
  let employees = [employee1, employee2, employee3];
  
  console.log("Problem 1: Employees JSON");
  console.log(employees);
  
  let answer1 = JSON.parse(JSON.stringify(employees));
  
  // Problem 2
  let company = {
    companyName: "Tech Stars",
    website: "www.techstars.site",
    employees: employees
  };
  
  console.log("Problem 2: Company JSON");
  console.log(company);
  
  let answer2 = JSON.parse(JSON.stringify(company));
  
  // Problem 3
  let employee4 = {
    firstName: "Anna",
    department: "Tech",
    designation: "Executive",
    salary: 25600,
    raiseEligible: false
  };
  
  let company2 = JSON.parse(JSON.stringify(company));
  company2.employees.push(employee4);
  
  console.log("Problem 3: Updated Company JSON");
  console.log(company2);
  
  let answer3 = JSON.parse(JSON.stringify(company2));
  
  // Problem 4
  let totalSalary = 0;
  for (let employee of company2.employees) {
    totalSalary += employee.salary;
  }
  
  console.log("Problem 4: Total Salary");
  console.log(totalSalary);
  
  let answer4 = totalSalary;
  
  // Problem 5
  function giveRaise(company) {
    for (let employee of company.employees) {
      if (employee.raiseEligible) {
        employee.salary *= 1.1;
        employee.raiseEligible = false;
      }
    }
    return company;
  }
  
  let company3 = JSON.parse(JSON.stringify(company2));
  company3 = giveRaise(company3);
  
  console.log("Problem 5: Updated Company after Raise");
  console.log(company3);
  
  let answer5 = JSON.parse(JSON.stringify(company3));
  
  // Problem 6
  let wfhEmployees = ['Anna', 'Sam'];
  for (let employee of company3.employees) {
    employee.wfh = wfhEmployees.includes(employee.firstName);
  }
  
  console.log("Problem 6: Updated Company with WFH");
  console.log(company3);
  
  let answer6 = JSON.parse(JSON.stringify(company3));