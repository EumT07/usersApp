import os from "os"

//Destructuring

//Cpu
const {model, speed} = os.cpus()[1];

//Network
const {
    address,
    netmask, 
    family, 
    mac } = os.networkInterfaces()["Wi-Fi"][1];


const sys_Screen = `
        ===================
            Your Device
        ===================\n
        Version: ${os.version()}
        Bits: ${os.arch()} bits
        Type: ${os.type()}
        Platform: ${os.platform()}
        Cpu: ${model.bgGreen}
        Speed: ${speed} rpm
        network: 
        \t Adress: ${address}
        \t Metamask: ${netmask}
        \t Family: ${family}
        \t Mac: ${mac}
        
`

export default sys_Screen;