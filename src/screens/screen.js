"use strict"
import pkg  from "colors";
import sysos from "../sys/sysos.js";
const {color} = pkg;

//Menu screen

const menuS_text = {
    clipApp: " Clip App ".bgYellow.bold,
    choose: "Choose an Option:".blue.bold,
    show: "1) Show system".green,
    paneles: "2) Panneles".green,
    cleaner: "3) Cleaner".green,
    exit: "4) Exit".red.bold
}
const menu_screen = `
        =========================
                ${menuS_text.clipApp}
        =========================
        ${menuS_text.choose}
            ${menuS_text.show}
            ${menuS_text.paneles}
            ${menuS_text.cleaner}
            ${menuS_text.exit}
        =========================\n>_: `;

//System Screen
const sys_Screen = `
        ===================
            Your Device
        ===================\n
        User: ${sysos.user}
        Version: ${sysos.version}
        Bits: ${sysos.bits} bits
        Type: ${sysos.type}
        Platform: ${sysos.platform}
        Cpu: ${sysos.cpu}
        Speed: ${sysos.speed} rpm
        network Conection: ${sysos.network}
        \t Adress: ${sysos.address}
        \t Metamask: ${sysos.netmask}
        \t Family: ${sysos.family}
        \t Mac: ${sysos.mac.toUpperCase()}
>`;

//Options screen
const optionScreen = `
===============CMD================= 
:back = Menu | :exit = Close app
===================================`


//Cleanr screen
const cleanerScreen = `
        ===================
             Cleaners
        ===================
        ${menuS_text.choose}
            1) Clean IP
            2) Clean DNS
            3) Clean Both
        ===================\n>_: `;

// Data
const dataScreen = `
        ===================
                Data
        ===================
        1) Crear User
        2) Lista de Users
`

const dataScreen_user = `
================CMD============================= 
 User {sh: search |:ed = editar | :dl = delete }
        :back = Menu | :exit = Salir
================================================>
`
const dataScreen_property = `
================CMD============================= 
Property {add: New |:ed = editar | :dl = delete} 
================================================`

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

//Export Area
export { 
    menu_screen, 
    sys_Screen,
    optionScreen,
    cleanerScreen,
    dataScreen,
    dataScreen_user,
    dataScreen_property,
    createScreen,
    clientListScreen 
}

