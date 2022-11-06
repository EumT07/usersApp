"use strict"
import pkg  from "colors";
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
        =========================\n >
`;

export default menu_screen
