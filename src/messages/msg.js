"use strict"
import color from "colors"
import util from "util"
const sleep = util.promisify(setTimeout);

async function loadingData_message(){
    await sleep(1000);
    console.clear();
    console.log("Loading.".yellow.bold);
    await sleep(1100);
    console.clear();
    console.log("Loading..".yellow.bold);
    await sleep(1200);
    console.clear();
    console.log("Loading...".green.bold)
    await sleep(1400);
    console.clear();
}
async function searchingData_message(userID){
    await sleep(1200);
    console.log(`Wait few seconds we are searching user with ID: `.yellow.bold,userID);
    await sleep(1500);
    console.clear()
    loadingData_message();
    await sleep(5000);
    console.clear()
    console.log(`We almost finish...`.green.bold);
    await sleep(1000);
    console.clear()
}

const errorMessage = "Sorry, there is an error, Try again..!!".red.bold;

export {
    loadingData_message,
    searchingData_message,
    errorMessage
}