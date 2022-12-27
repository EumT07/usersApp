"use strict"
import { getConnection } from "../database/database.js"
import User from "../models/user.js"
import  color  from "colors"

//Showing user's List
const getUsers = async () =>{
    try {
        const db = getConnection()
        const users = await db.data.Users;
        let result = [];
        for (let i = 0; i < users.length; i++) {
            result.push({
                id : users[i]["id"].substring(0,7),
                name : users[i]["name"],
                email : users[i]["email"],
                phone: users[i]["cellphone"],
            });
        }
        //Checking if the are users
        if(result.length === 0) return console.log("There is not usert yet".red.bold);
        
        console.table(result);
    } catch (error) {
        console.error(error);
    }
}

//Creating a New user
const createUser = async (answers) => {
    const newUser = new User(answers[0],answers[1],answers[2],answers[3])
    try{
        const db = getConnection();
        //Checking is user exists
        const user = await db.data.Users.find(
            (user) => user.email === answers[2]
        );

        // Checking if user is already created
        if(user) return console.log("This user was already created".red.bold);
        
        //Adding new user
        db.data.Users.push(newUser);

        //Saving info
        await db.write();
        console.log("The user was created successfully".green.bold);
    }catch(err){
        console.error(err);
    }
}
//Search 
const searchUser = async (userID) => {
    try {
        const db = getConnection()
        //Searching user by ID
        const user = await db.data.Users.find(
            (user) => user.id.substring(0,7) === userID
        );
        //Checking if user Exist or not.
        if(!user) return console.log("Sorry user not found".red)
        console.table(user);
    } catch (error) {
        console.error(error)
    }
 }
//Update
const updateUser = async (userID, key, newValue) => {
    try {
        //Search user in order to change its property
        const db = await getConnection();
        const user = db.data.Users.find(
            (user) => user.id.substring(0,7) === userID
        );
        
        //Checking if user Exist 
        if (!user) return console.log("User not found".red);
        
        //Converting the first letter to Uppercase
        const value = newValue[0].toUpperCase() + newValue.slice(1);

        //Control Flow
        let newData = null;
        if(key === "name"){
            user.name = value;
            newData = user;
        }else if(key === "lastName"){
            user.lastName = value;
            newData = user;
        }else if(key === "email"){
            user.email = value.toLowerCase();
            newData = user;
        }

        //Saving all changes in a new array
        const newArr = db.data.Users.map((user) => {
            if(user.id.substring(0,7) == userID){
                return newData;
            }else{
                return user;
            }
        });
        //Saving info
        await db.write();
    } catch (error) {
        console.error(error)
    }
}
//Delete
const deleteUser = async (userID) => {
    try {
        const db = await getConnection();
        const user = db.data.Users.find((user)=>{
            return user.id.substring(0,7) === userID;
        });
        
        //Searching if the user exists or not
        if(!user) return console.log("User not Found".red);

        //Deleting and showing the user List
        const newData = db.data.Users.filter((user)=>{
            return user.id.substring(0,7) !== userID;
        });
        db.data.Users = newData;
        //Saving info
        await db.write()
        console.log("It was deleted successfully".green)
    } catch (error) {
        console.error(error)
    }
}
export {
    createUser,
    getUsers,
    searchUser,
    updateUser,
    deleteUser
}