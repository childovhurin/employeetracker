  
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