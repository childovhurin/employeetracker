  
const mysql = require("mysql");
const inquirer = require("inquirer");

//creates mysql connection variable
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
            //this function calls the next inquirer function based on user's choice
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