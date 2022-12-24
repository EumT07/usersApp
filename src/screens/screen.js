"use strict"
import pkg  from "colors";
const {color} = pkg;

//Menu screen

const menuS_text = {
    clipApp: " Clip UsersApp ".bgYellow.bold,
    choose: "Choose an Option:".blue.bold,
    creatNewUser: "1) Creat User".green,
    userList: "2) List Users".green,
    exit: "3) Exit".red.bold
}
const menu_screen = `
        =========================
           ${menuS_text.clipApp}
        =========================
        ${menuS_text.choose}
            ${menuS_text.creatNewUser}
            ${menuS_text.userList}
            ${menuS_text.exit}
        =========================\n>_: `;


//Options screen
const optionScreen = `
===============CMD================= 
:back = Menu | :exit = Close app
===================================`


const dataScreen_user = `
====================CMD========================= 
        Settings {
                :sh = search
                :ed = editar
                :dl = delete }
================================================>
`
const dataScreen_property = `
================CMD========================= 
        Edit user{
                1) Name
                2) LastName
                3) Email
                4) Status
                5) add a new property
                :back = Menu
                :exit = Close app 
============================================`

//Creatin user

const createScreen = `
        ===================
           Creating User
        ===================\n
`
const clientListScreen = `
        ===================
               Users
        ===================`

const searchUser_Screen = `
====================================
        Copy ID (crtl + c )
        Insert ID (click Right)
====================================>
`
const updateUser_Screen = `

`

//Export Area
export { 
    menu_screen, 
    optionScreen,
    dataScreen_user,
    dataScreen_property,
    createScreen,
    clientListScreen,
    searchUser_Screen 
}

