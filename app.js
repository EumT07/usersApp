import readline from "readline/promises";
import {stdin as input, stdout as output} from "process"
//Imports from Screens
import  {
    menu_screen,
    sys_Screen,
    optionScreen,
    cleanerScreen,
    dataScreen,
    dataScreen_property,
    dataScreen_user,
    createScreen,
    clientListScreen
} from "./src/screens/screen.js"
// Import from Cleaners
import {releaseIp, renewIP, displayDNS, flushingDNS} from "./src/sys/cleaners.js"
import util from "util"
import {createConnectionLownDb} from "./src/database/database.js"
import {createUser, getUsers} from "./src/controllers/users.ctrl.js"
const sleep = util.promisify(setTimeout);

//Creating interface screen
let cmdShell = readline.createInterface(input , output);

menuScren()
createConnectionLownDb()
async function menuScren(){
    console.clear()
    const answer = await cmdShell.question(menu_screen);
    switch (answer.trim()) {
        case "1":
            getSysInfo();
            break;
        case "2":
            contacts();
            break;
        case "3":
            clean();
            break;
        case "4":
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

//Sys_Screen
async function getSysInfo(){
    console.clear()
    console.log(optionScreen);
    console.log(sys_Screen);
    await cmdShell.on("line", async (line) =>{
        switch (line.trim()) {
            case ":back":
                menuScren(); 
                break;
            case ":exit":
                cmdShell.close();
                break;
            default:
                console.clear();
                console.log("There is an err, try again");
                await sleep(1000);
                getSysInfo();
                break;
        }
    });
}

//Cleaner
async function clean(){
    console.clear();
    console.log(optionScreen);
    console.log(cleanerScreen);
    const getLine = await cmdShell.on("line", async (line) => {
        switch (line.trim()) {
            case "1":
                releaseIp();
                renewIP();
                await sleep(6000);
                clean();
                break;
            case "2":
                displayDNS();
                flushingDNS();
                await sleep(2000);
                clean();
                break;
            case "3":
                //Cleaning IP
                releaseIp();
                renewIP();
                await sleep(6000);
                //Cleaning DNS
                displayDNS();
                flushingDNS();
                await sleep(2000);
                menuScren()
                break;
            case ":back":
                menuScren()
                break;
            case ":exit":
                cmdShell.close();
                break;
            default:
                console.log("There was An error, try again");
                await sleep(2000);
                clean();
                break;
        }
    })
  
}

// Contacts
async function contacts(){
    console.clear()
    console.log(optionScreen);
    const data = await cmdShell.question(dataScreen);
    switch (data.trim()) {
        case "1":
            console.clear();
            getUserInfo()
            break;
        case "2":
            getUserList();
            break;
        case ":back":
            menuScren(); 
            break;
        case ":exit":
            cmdShell.close();
            break;
        default:
            console.clear();
            console.log("There is an err, try again");
            await sleep(1000);
            contacts()
            break;
    }
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
    contacts(); 
}
//Show clients
async function getUserList(){
    console.clear()
    console.log(clientListScreen);
    console.log(dataScreen_user);
    getUsers();
    const data = await cmdShell.on("line", async (data)=>{
        switch (data.trim()) {
            case ":back":
                contacts()
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