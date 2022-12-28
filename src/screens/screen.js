"use strict"
import pkg  from "colors";
const {color} = pkg;

//Menu screen
const menuS_text = {
    clipApp: " Clip UsersApp ".bgYellow.bold,
    choose: "Choose an Option:".blue.bold,
    creatNewUser: "Creat User".green.bold,
    userList: "List Users".green.bold,
    exportInfo: "Export text".green.bold,
    exit: "Exit".red.bold
}
const menu_screen = `
        =========================
             ${menuS_text.clipApp}
        =========================
           ${menuS_text.choose}
                1) ${menuS_text.creatNewUser}
                2) ${menuS_text.userList}
                3) ${menuS_text.exportInfo}
                4) ${menuS_text.exit}
        =========================\n${"_> : ".blue.bold}`;

//Options screen
const OS_text = {
        sh: ":sh".green.bold,
        shtext: "Choose User".yellow,
        back: ":back".green.bold,
        backtext: "Menu".yellow.bold,
        exit: ":exit".green.bold,
        exit_text: "Close app".red.bold
}
const optionScreen = `
===============CMD================
        ${OS_text.sh} = ${OS_text.shtext}
        ${OS_text.back} = ${OS_text.backtext}
        ${OS_text.exit} = ${OS_text.exit_text}
==================================\n`

//Propierties Text
const P_text = {
        name: "Name".green.bold,
        lastName: "Lastname".green.bold,
        email: "Email".green.bold,
        del: "Delete User".green.bold,
        back: "back".green.bold,
        backtext: "Menu".yellow.bold,
        exit: "exit".red.green.bold,
        exit_text: "Close app".red.bold
}
const dataScreen_properties = `
================CMD======================== 
        ${"Edit user".blue.bold}{
                1) ${P_text.name}
                2) ${P_text.lastName}
                3) ${P_text.email}
                4) ${P_text.del}
                :${P_text.back} = ${P_text.backtext}
                :${P_text.exit} = ${P_text.exit_text} }
===========================================`

//Creatin user

const createScreen = `
        ===================
         ${"Creating User".green.bold}
        ===================\n
`
const searchUser_Screen = `
========================================
        ${"Type ID".green.bold}
        ${"Copy ID (Select + crtl + c )".green.bold}
        ${"Insert ID (click Right)".green.bold}
========================================>
`
const new_Name = `
        ====================
          ${"Write a New Name".green.bold}
        ====================`
const new_lastName = `
        ========================
          ${"Write a New Lastname".green.bold}
        ========================`
const new_email = `
        =====================
          ${"Write a New Email".green.bold}
        =====================`

//Export Area
export { 
    menu_screen, 
    optionScreen,
    dataScreen_properties,
    createScreen,
    searchUser_Screen,
    new_Name,
    new_lastName,
    new_email 
}

