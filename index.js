const mysql = require("mysql2");
const inquirer = require("inquirer");
const cTable = require("console.table");

const db = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "",
        database: "employee_db",

    },
    console.log("Database connection established successfully")
);

function startApp () {
    inquirer
        .prompt([
            {
                type: "list",
                message: "What would you like to do?",
                name: "select",
                choices: [
                "View All Departments", 
                "View All Employees", 
                "View All Roles", 
                "Add a Department", 
                "Add an Employee Role", 
                "Add an Employee", 
                "Update an Employee Role"
                ]
            },
        ]).then((data) => {
            switch (data.select) {
                case "View All Departments":
                    Departments();
                    break;
                case "View All Roles":
                    Roles();
                    break;
                case "View All Employees":
                    Employees();
                    break;
                case "Add a Department":
                    addDept();
                    break;
                case "Add an Employee":
                    addEmp();
                    break;
                case "Add an Employee Role":
                    addRole();
                    break;
                case "Update Employee Role":
                    updateRole();
                    break;
            }
        });
};



