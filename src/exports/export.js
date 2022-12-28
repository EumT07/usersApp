import fs from "fs";
import path from "path";
import os from "os"
import { getConnection } from "../database/database.js";
import color from "colors"
//Get user list
async function createFolder(){
    try {
        //Root User
        const homeRoot = os.homedir();
        //Path
        const desktopRoot = path.normalize(`${homeRoot}\\Desktop`);
        //Folder
        const folder = "AppUsers";
        //File Name
        const file = "appuser.txt"
        //All user data
        const db = getConnection();
        const users = await db.data.Users;
        //File Content
        let content = "Accounts :\n";
        for (let i = 0; i < users.length; i++) {
            content += `
            ================== ${i + 1} ==================
                Name: ${users[i]["name"]}
                LastName: ${users[i]["lastName"]}
                Email: ${users[i]["email"]}
                Phone: ${users[i]["cellphone"]}
                Date: ${users[i]["time"]}
            ==========================================\n`
        }

        if(fs.existsSync(`${desktopRoot}/${folder}`)){
            //Deleting file in order to rewrite the new info on it
            fs.unlinkSync(`${desktopRoot}/${folder}/${file}`);
            //Adding a new info
            fs.appendFileSync(`${desktopRoot}/${folder}/${file}`,   content);
            console.log("The folder was Updated".green.bold);
        }else{
            //Creating Folder
            fs.mkdirSync(`${desktopRoot}/${folder}`);
            //Creat file with users info
            fs.writeFileSync(`${desktopRoot}/${folder}/${file}`,    content);
            console.log("The folder was Created successfully".green.bold);
        }
    } catch (error) {
        console.error(error)
    }
}

export {
    createFolder
}