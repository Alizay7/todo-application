import inquirer from "inquirer";
import chalk from "chalk";
let todoList = [];
let condition = true;
console.log(chalk.underline.bold("\n\t welcome to Aliza's todo list \n\t"));
while (condition) {
    let addTask = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: "enter your new task:"
        }
    ]);
    todoList.push(addTask.task);
    console.log(`${addTask.task} task added in todoList successfully`);
    let addmoreTask = await inquirer.prompt([
        {
            name: "addmore",
            type: "confirm",
            message: "do you want to add more task?",
            default: "false"
        }
    ]);
    condition = addmoreTask.addmore;
}
console.log("your updated todolist", todoList);
