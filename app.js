import inquirer from "inquirer";
import readline from "readline/promises";
import {stdin as input, stdout as output} from "process"
import colors from "colors"
import fs from "fs";
import path from "path";
//Imports Screens
import  {
    menu_screen,
    sys_Screen,
    optionScreen,
    cleanerScreen
} from "./src/screens/screen.js"
// Import Cleaners
import {releaseIp, renewIP, displayDNS, flushingDNS} from "./src/sys/cleaners.js"
import util from "util"
const sleep = util.promisify(setTimeout);



//Creating interface screen
let cmdShell = readline.createInterface(input , output);

menuScren()

async function menuScren(){
    console.clear()
    const answer = await cmdShell.question(menu_screen);
    switch (answer.trim()) {
        case "1":
            getSysInfo();
            break;
        case "2":
            console.log("You chose option 2 ");
            break;
        case "3":
            clean();
            break;
        case "4":
            cmdShell.close();
            break;
        default:
            console.log("Err");
            await sleep(1000)
            menuScren()
    }
}

//Menu options
async function menuOptions(){
    const getLineEvent = await cmdShell.on("line", async (line) =>{
        switch (line.trim()) {
            case ":back":
                menuScren(); 
                break;
            case ":exit":
                cmdShell.close();
                break;
            default:
                console.log("There is an err, try again");
                await sleep(1000)
                getSysInfo();
                break;
        }
    });
    
}


//Sys_Screen
function getSysInfo(){
    console.clear()
    console.log(optionScreen);
    console.log(sys_Screen);
    menuOptions()
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
                clean();
                break;
        }
    })
  
}