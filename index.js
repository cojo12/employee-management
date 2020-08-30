const inquirer = require("inquirer");;
const connection = require("./connection");

askQuestions():

function askQuestions() {
  inquirer.prompt({
    name: "employeeDB",
    type: "list",
    message: "What would you like to do?",
    choices: ["View departments", "View roles", "View employees", "Add department", "Add role", "Add employee"]
  }).then(function(answer) {
    if(answer.employeeDB === "View departments") {
      viewDept();
    }
    else if (answer.employeeDB === "View roles") {
      viewDeptRole();
    }
    else if(answer.employeeDB === "View employees") {
      viewEmpl();
    }
    else if(answer.employeeDB === "Add department") {
      addDept()
    }
    else if (answer.employeeDB === "Add role") {
      addRole();
    }
    else if(answer.employeeDB === "Add employee") {
      addEmpl()
    }
    else{
      connection.end();
    }
  })
}

function viewDept() {
  connection.query("SELECT * FROM department", function(err, res) {
      if(err) throw err;
      console.log("Here are the departments...");
      for (let i = 0; i < res.length; i ++) {
          console.log(res[i].id + " | " + res[i].name);
      }
      connection.end()
  });
}

function viewRole() {
  connection.query("SELECT * FROM role", function(err, res) {
      if(err) throw err;
      console.log("Here are the employee roles...");
      for (let i = 0; i < res.length; i ++) {
          console.log(res[i].id + " | " + res[i].title + " | " + res[i].salary);
      }
      connection.end();
  });
}

function viewEmpl() {
  connection.query("SELECT * FROM employee", function(err, res) {
      if(err) throw err;
      for (let i = 0; i < res.length; i ++) {
          console.log(res[i].id + " | " + res[i].first_name + " " + res[i].last_name);
      }
      connection.end();
  });
}

function addDept() {
  inquirer
  .prompt({
      name: "addDepartment",
      type: "input",
      message: "Enter the name of the department you would like to add."
  }).then(function(answer) {        
      let sql = "INSERT INTO department (name) VALUES (?)";
      let query = connection.query(sql, [answer.addDepartment], function (err, res) {
        if (err) throw err;
        console.log("New department added.");
      });
      console.log(query.sql);
      connection.end();
    });
}

function addRole() {
  inquirer.prompt([
      {
          name:"title",
          type:"input",
          message:"Please enter the title of the role you would like to add."
      },
      {
          name:"salary",
          type:"input",
          message:"Please enter the salary for that role."
      }
  ]).then(function(answers){
      let sql = "INSERT INTO role (title, salary) VALUES (?,?)"
      let query = connection.query(sql, [answers.title, answers.salary], function(err,res) {
          if(err) throw err;
          console.log("That role and salary have been added to the DB.");
      });
      console.log(query.sql);
      connection.end();
  });
}

function addEmpl() {
  inquirer.prompt([
      {
          name:"firstName",
          type: "input",
          message:"Please enter the first name of the employee you would like to add."
      },
      {
          name:"lastName",
          type:"input",
          message:"Please enter the employee's last name"
      }
  ]).then(function(answers) {
      let sql = "INSERT INTO employee (first_name, last_name) VALUES (?,?)";
      let query = connection.query(sql, [answers.firstName, answers.lastName], function(err, res) {
          if(err) throw err;
          console.log("The employee has been added to the DB.");
      });
      console.log(query.sql);
      connection.end();
  });
}