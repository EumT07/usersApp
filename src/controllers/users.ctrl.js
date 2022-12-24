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

const searchUser = async (userID) => {
    const searchingUser = await getConnection().data.Users.find(
        (user) => user.id.substring(0,7) === userID
    );

    console.table(searchingUser);
 }
//Edit or Update
const updateUser = async (userID, property, newProperty = ) => {
    //Search user in order to change its property
    //flow control 
    // if property == name
    // if property == lastname
    // if property == email
    
}

//Delete
const deleteUser = async (userID) => {
    const db = await getConnection()
    const userFound = db.data.Users.find((user)=>{
        return user.id.substring(0,7) === userID;
    })
    const newData = db.data.Users.filter((user)=>{
        return user.id.substring(0,7) !== userID;
    });
    db.data.Users = newData;
    await db.write()
    console.log("It was deleted successfully")
}
export {
    createUser,
    getUsers,
    searchUser,
    updateUser,
    deleteUser
}