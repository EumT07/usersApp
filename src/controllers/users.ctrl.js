import { getConnection } from "../database/database.js"
import User from "../models/user.js"

//Read user's List

const getUsers = async () =>{
    const users = await getConnection().data.Users;
    let result = [];
    for (let i = 0; i < users.length; i++) {
        result.push({
            id : users[i]["id"].substring(0,7),
            name : users[i]["name"],
            email : users[i]["email"],
            status : users[i]["status"],
        });
        
    }
    console.table(result);
}

//Creat
const createUser = async (answers) => {
    const newUser = new User(answers[0],answers[1],answers[2])
    try{
        const db = getConnection();
        db.data.Users.push(newUser);
        await db.write();
    }catch(err){
        console.log(err);
    }
}
//Search
//Edit or Update
//Delete
export {
    createUser,
    getUsers
}