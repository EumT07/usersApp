import inquirer from "inquirer";
import readline from "readline/promises";
import {stdin as input, stdout as output} from "process"
import colors from "colors"
import fs from "fs";
import path from "path";
//Imports Screens
import  menu_screen  from "./src/screens/screen.js"
import sys_Screen from "./src/sys/sysos.js";
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
            console.log("You chose option 3 ");
            break;
        case "4":
            console.log("You chose option 4 ");
            break;
        default:
            console.log("Err");
            await sleep(1000)
            menuScren()
    }
}

//Function get Sys_Screen
function getSysInfo(){
    console.clear()
    console.log(sys_Screen);
}