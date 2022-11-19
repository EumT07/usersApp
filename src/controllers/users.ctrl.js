import readline from "readline/promises";
import {stdin as input, stdout as output} from "node:process"
import { getConnection } from "../database/database.js"
import User from "../models/user.js"
import id_v4 from "uuidv4"
//Creat all functions about users
let cmdQuestions = readline.createInterface(input , output);

const questions = [
    "Name: ",
    "Last Name: ",
    "Email: "
]
const answers = [];

async function getUserInfo(){
    let data = null;
    for(let i = 0; i < questions.length; i++){
        data = await cmdQuestions.question(questions[i]);
        answers.push(data);
    } 
}

let newUser =null;
const createUser = async () => {
    await getUserInfo();
    newUser = new User(answers[0],answers[1],answers[2])
    console.table(newUser);
    try{
        const db = getConnection();
        db.data.Users.push(newUser);
        await db.write();
    }catch(err){
        console.log(err);
    }
}

export {
    createUser
}