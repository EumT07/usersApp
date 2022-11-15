import os from "os"

//Destructuring
//Cpu
const {model, speed} = os.cpus()[1];

//Network
let wifiAdapter = null;
let ethernetAdapter = null;

function getNetworkData(){
    let network =  os.networkInterfaces()
    let netWorkLength = Object.keys(network).length

    if(netWorkLength === 2){
        wifiAdapter = "Wi-Fi"
        return os.networkInterfaces()["Wi-Fi"][1];
    }else{
        ethernetAdapter = "Ethernet"
        return os.networkInterfaces()["Loopback Pseudo-Interface 1"][1];;
    }

}
const adapter = function adapterDevice(){
    if (wifiAdapter !== null){
        return wifiAdapter
    }else {
        return ethernetAdapter
    }
}
const {
    address,
    netmask, 
    family, 
    mac } = getNetworkData();

const sysos = {
    user: os.userInfo().username,
    version: os.version(),
    bits: os.arch(),
    type: os.type(),
    platform: os.platform(),
    cpu: model,
    speed: speed,
    network: adapter(),
    address: address,
    netmask: netmask,
    family: family,
    mac: mac
}


export default sysos