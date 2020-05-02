
const mysql = require("mysql");
const inquirer = require("inquirer");
//creates mysql connection
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "employee_trackerDB"
});
//connection and start function
connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    start();
});
function start() {
    inquirer
        .prompt([
            {
                type: "list",
                message: "What would you like to do?",
                name: "start",
                choices: ["VIEW", "ADD", "UPDATE", "DELETE", "EXIT PROGRAM"]
            }
        ]).then(function (answer) {
            if (answer.start === "VIEW") {
                viewQuestions();
            } else if (answer.start === "ADD") {
                addQuestions();
            } else if (answer.start === "UPDATE") {
                updateQuestions();
            } else if (answer.start === "DELETE") {
                deleteQuestions();
            } else {
                process.exit();
            }
        })
}
//VIEW FUNCTIONS
function viewQuestions() {
    inquirer
        .prompt([
            {
                name: "view",
                type: "list",
                message: "What would you like to view?",
                choices: ["View all information", "View employees", "View roles", "View departments", "View employees by manager", "Go back"]
            }
        ]).then((answer) => {
            if (answer.view === "View all information") {
                viewAllInformation();
            } else if (answer.view === "View employees") {
                viewEmployees();
            } else if (answer.view === "View roles") {
                viewRoles();
            } else if (answer.view === "View departments") {
                viewDepartment();
            } else if (answer.view === "View employees by manager") {
                viewEmployeesByManager();
            } else {

                start();
            }
        })
}

function viewAllInformation() {
    connection.query("SELECT department.id AS department_id, department.name AS department_name, e.id AS employee_id, role.id AS role_id, e.first_name, e.last_name, role.title AS title, m.id AS manager_id, m.first_name AS manager_first, m.last_name AS manager_last FROM employee e LEFT JOIN role ON e.role_id = role.id LEFT JOIN employee m ON e.manager_id  = m.id LEFT JOIN department ON department.id=role.department_id ORDER BY e.id ASC", function (err, res) {
        if (err) throw err;
        const referenceTable = [];
        for (let i = 0; i < res.length; i++) {
            referenceTable.push(
                {
                "Employee ID": res[i].employee_id,
                Name: res[i].first_name + " " + res[i].last_name,
                "Role ID": res[i].role_id,
                Role: res[i].title,
                "Department ID": res[i].department_id,
                Department: res[i].department_name,
                "Manager ID": res[i].manager_id,
                "Manager Name": res[i].manager_first + " " + res[i].manager_last
                }
            );
        }
        console.table(referenceTable);
        start();
    })
}


//ADD

//DELETE
