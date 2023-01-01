import readline from "readline/promises";
import {stdin as input, stdout as output} from "process"
//Imports from Screens
import  {
    menu_screen,
    optionScreen,
    dataScreen_properties,
    createScreen,
    searchUser_Screen,
    new_Name,
    new_lastName,
    new_email
} from "./src/screens/screen.js"
import util from "util"
import {createConnectionLownDb} from "./src/database/database.js"
import {
    createUser,
    deleteUser,
    getUsers,
    searchUser,
    updateUser,
    check_id
}from "./src/controllers/users.ctrl.js";
import { loadingData_message, searchingData_message, errorMessage } from "./src/messages/msg.js";
import events from "node:events";
import { createFolder } from "./src/exports/export.js"

const sleep = util.promisify(setTimeout);
events.defaultMaxListeners = 20

//Creating interface screen
let cmdShell = readline.createInterface(input , output);

menuScren();
createConnectionLownDb();
async function menuScren(){
    await sleep(1000);
    console.clear();
    const answer = await cmdShell.question(menu_screen);
    switch (answer.trim()) {
        case "1":
            console.clear();
            getUserInfo();
            break;
        case "2":
            console.clear();
            getUserList();
            break;
        case "3":
            exportInfo();
            break;
        case "4":
            console.clear();
            console.log("Thanks, good bye..!!".bgBlue.white.bold);
            await sleep(1300);
            cmdShell.close();
            break;
        default:
            console.clear();
            console.log(errorMessage);
            await sleep(1000);
            menuScren();
            break;
    }
}

//Getting data from clients and creating users
async function getUserInfo(){
    await sleep(1000);
    console.log(createScreen);
    const questions = [
        "Name _> : ".green.bold,
        "Last Name _> : ".green.bold,
        "Email _> : ".green.bold,
        "Phone _> : ".green.bold
    ];
    const answers = [];
    let data = null;
    for(let i = 0; i < questions.length; i++){
        data = await cmdShell.question(questions[i]);
        answers.push(data[0].toUpperCase() + data.slice(1));
    }
    loadingData_message();
    await sleep(5000);
    createUser(answers);
    await sleep(1000);
    menuScren(); 
}
//Show Users
async function getUserList(){
    console.clear();
    console.log(optionScreen);
    await sleep(1500);
    getUsers();
    await sleep(1600);
    const data = await cmdShell.question("_> ".blue.bold);
    switch (data.trim()) {
        case ":sh":
            searching();
            break;
        case ":back":
            menuScren();
            break;
        case ":exit":
            console.clear();
            console.log("Thanks, good bye..!!".bgBlue.white.bold);
            await sleep(1300);
            cmdShell.close();
            break;
        default:
            console.clear();
            console.log(errorMessage);
            await sleep(1000);
            menuScren();
            break;
    }
    
}
//Export file
async function exportInfo(){
    await sleep(1000);
    console.clear();
    await createFolder();
    await sleep(2000);
    menuScren();
}

//Searching User by ID
async function searching(){
    loadingData_message();
    await sleep(5800);
    console.clear();
    console.log(searchUser_Screen);
    getUsers();
    await sleep(2000);
    const userID = await  cmdShell.question("Seach User By ID _> ".blue.bold);
    const value = await check_id(userID);
    await sleep(1000);
    if(value){
        console.clear();
        searchingData_message(userID.green.bold);
        await sleep(12000);
        console.clear();
        edit_settings(userID);  
    }else{
        console.clear();
        console.log(`Ups.. Sorry`.yellow.bold);
        console.log(`There is not any user with this ID: ${userID.yellow}`.red.bold);
        await sleep(1000);
        return searching(); 
    }
    
}
//Settings
async function edit_settings(userID){
    searchUser(userID);
    console.log(dataScreen_properties);
    await sleep(2000);
    const answer = await cmdShell.question("_>  ".blue.bold)
    switch (answer.trim()) {
        case "1":
            console.clear();
            await sleep(1000);
            change_name(userID);
            break;
        case "2":
            console.clear();
            await sleep(1000);
            change_lastName(userID);
            break;
        case "3":
            console.clear();
            await sleep(1000);
            change_email(userID);
            break;
        case "4":
            console.clear();
            await sleep(1000);
            return deletingUser(userID);
        case ":back":
            console.clear();
            return menuScren();
        case ":exit":
            console.clear();
            console.log("Thanks, good bye..!!".bgBlue.white.bold);
            await sleep(1300);
            cmdShell.close();
            break;
        default:
            console.clear();
            console.log(errorMessage);
            await sleep(1000);
            menuScren();
            break;
    }
}
//Changing name
async function change_name(userID){
    console.log(new_Name);
    //Take a new name
    await sleep(1000);
    const answer = await cmdShell.question("Insert the new Name _> : ".blue.bold);
    const newName = answer.trim().toLowerCase();
    //Property to change
    const property = "name";
    //replace the old name by new name
    updateUser(userID,property,newName);
    console.clear();
    await sleep(1000);
    return edit_settings(userID);
}
//Changing lastName
async function change_lastName(userID){
    console.log(new_lastName);
    //Take a new name
    const answer = await cmdShell.question("Insert the new Lastname _> : ".blue.bold);
    const newLastName = answer.trim().toLowerCase();
    //Property to change
    const property = "lastName";
    //replace the old name by new name
    updateUser(userID,property,newLastName);
    await sleep(1000);
    console.clear();
    return edit_settings(userID);
}
//Changing email
async function change_email(userID){
    console.log(new_email);
    //Take a new name
    const answer = await cmdShell.question("Insert the new email _> : ".blue.bold);
    const newEmail = answer.trim().toLowerCase();
    //Property to change
    const property = "email";
    //replace the old name by new name
    updateUser(userID,property,newEmail);
    console.clear();
    await sleep(1000);
    return edit_settings(userID);
}

async function deletingUser(userID){
    loadingData_message();
    await sleep(5800);
    deleteUser(userID);
    await sleep(1000);
    return menuScren();
}
