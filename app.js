import readline from "readline/promises";
import {stdin as input, stdout as output} from "process"
//Imports from Screens
import  {
    menu_screen,
    optionScreen,
    dataScreen_user,
    dataScreen_property,
    createScreen,
    clientListScreen,
    searchUser_Screen
} from "./src/screens/screen.js"
// Import from Cleaners
import util from "util"
import {createConnectionLownDb} from "./src/database/database.js"
import {createUser, deleteUser, getUsers, searchUser,updateUser} from "./src/controllers/users.ctrl.js"
import events from "node:events";

const sleep = util.promisify(setTimeout);

events.defaultMaxListeners = 20

//Creating interface screen
let cmdShell = readline.createInterface(input , output);

menuScren()
createConnectionLownDb()
async function menuScren(){
    await sleep(1000)
    console.clear()
    const answer = await cmdShell.question(menu_screen);
    switch (answer.trim()) {
        case "1":
            console.clear();
            getUserInfo()
            break;
        case "2":
            console.clear();
            getUserList();
            break;
        case "3":
            cmdShell.close();
            break;
        default:
            console.clear();
            console.log("There is an err, try again");
            await sleep(1000);
            menuScren();
            break;
    }
}

//Meesages Folder
async function loadingData_message(){
    await sleep(1000);
    console.clear();
    console.log("Loading.");
    await sleep(1100);
    console.clear();
    console.log("Loading..");
    await sleep(1200);
    console.clear();
    console.log("Loading...")
    await sleep(1400);
    console.clear();
}
async function searchingData_message(userID){
    await sleep(1200);
    console.log(`Wait few seconds we are looking for user with "${userID}" ID`);
    await sleep(1500);
    console.clear()
    loadingData_message();
    await sleep(5000);
    console.clear()
    console.log(`We almost finish...`);
    await sleep(1000);
    console.clear()
}

//Getting data from clients and creating users
async function getUserInfo(){
    console.log(createScreen);
    const questions = [
        "Name: ",
        "Last Name: ",
        "Email: "
    ];
    const answers = [];
    let data = null;
    for(let i = 0; i < questions.length; i++){
        data = await cmdShell.question(questions[i]);
        answers.push(data);
    }
    createUser(answers);
    await sleep(1000);
    menuScren(); 
}
//Show clients
async function getUserList(){
    console.clear()
    console.log(optionScreen);
    console.log(dataScreen_user);
    await sleep(1500)
    getUsers();
    const data = await cmdShell.on("line", async (data)=>{
        switch (data.trim()) {
            case ":sh":
                searching();
                break;
            case ":ed":
                editingUser();
                break;
            case ":dl":
                deletingUser();
                break;
            case ":back":
                menuScren()
                break;
            case ":exit":
                cmdShell.close();
                break;
            default:
                console.clear();
                console.log("There is an err, try again");
                await sleep(1000);
                getUserList();
                break;
        }
    });
    
}



//Searching User by ID

async function searching(){
    loadingData_message();
    await sleep(5800);
    console.clear();
    console.log(searchUser_Screen);
    await sleep(1000);
    getUsers();
    await sleep(1800);
    const userID = await  cmdShell.question("Seach By ID _> ")
    console.clear()
    searchingData_message(userID);
    await sleep(12000);
    searchUser(userID)
    console.log(optionScreen)
    await cmdShell.on("line", async (data)=>{
        switch (data.trim()) {
            case ":back":
                menuScren()
                break;
            case ":exit":
                cmdShell.close();
                break;
            default:
                console.clear();
                console.log("There is an err, try again");
                await sleep(500);
                getUserList();
                break;
        }
    })
}

async function editingUser(){
    console.clear();
    loadingData_message();
    await sleep(6000);
    console.clear();
    console.log(searchUser_Screen);
    await sleep(1200);
    getUsers();
    await sleep(1800);
    const userID = await  cmdShell.question("Choose one By ID _> ")
    console.clear()
    searchingData_message(userID);
    await sleep(12000);
    searchUser(userID)
    // updateUser(userID)
    console.log(dataScreen_property)
    await cmdShell.on("line", async (data)=>{
        switch (data.trim()) {
            case "1":
                console.clear();
                change_name();
                break;
            case "2":
                console.log("Has Elgido 3");
                break;
            case "3":
                console.log("Has Elgido 3");
                break;
            case ":back":
                menuScren()
                break;
            case ":exit":
                cmdShell.close();
                break;
            default:
                console.log("There is an err, try again");
                await sleep(1000);
                console.clear();
                getUserList();
                break;
        }
    })
}

//Changing name
async function change_name(){
    //Take a new name
    //replace the old name by new name
    // Save new data into db
    // editing 
    console.log("Changing name");
}

async function deletingUser(){
    await sleep(1300)
    console.clear();
    loadingData_message();
    await sleep(5800);
    console.clear();
    console.log(searchUser_Screen);
    await sleep(1000);
    getUsers();
    await sleep(2000);
    const userID = await  cmdShell.question("Delete By ID _> ")
    console.clear()
    searchingData_message(userID);
    await sleep(14000);
    deleteUser(userID);
    await sleep(1000)
    getUserList();
}
