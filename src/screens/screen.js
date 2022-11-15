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
        ${menuS_text.choose} \n
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
        \t Mac: ${sysos.mac}
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

//Export Area
export { 
    menu_screen, 
    sys_Screen,
    optionScreen,
    cleanerScreen 
}

