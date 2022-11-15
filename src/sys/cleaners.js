import chillp from "node:child_process"
import util from "node:util"
import iconv from "iconv-lite"


const cmdAsync = util.promisify(chillp.exec) 


//Clean IP 
async function releaseIp(){
    const {stdout, stderr } = await cmdAsync("ipconfig /release", {"encoding":"buffer"});
    const encodeDataOut = iconv.decode(stdout, "Cp852");
    const encodeDataErr = iconv.decode(stderr, "Cp852");
    console.log(encodeDataOut);
    console.log(encodeDataErr);
    console.log("Ip was Cleaned");
 }
 async function renewIP(){
    const {stdout, stderr } = await cmdAsync("ipconfig /renew", {"encoding":"buffer"});
    const encodeDataOut = iconv.decode(stdout, "Cp852");
    const encodeDataErr = iconv.decode(stderr, "Cp852");
    console.log(encodeDataOut);
    console.log(encodeDataErr);
    console.log("Ip was renwed");
 }

 //Clean DNS 
 async function displayDNS(){
    const {stdout, stderr } = await cmdAsync("ipconfig /displaydns", {"encoding":"buffer"});
    const encodeDataOut = iconv.decode(stdout, "Cp852");
    const encodeDataErr = iconv.decode(stderr, "Cp852");
    console.log("All DNS");
    console.log(encodeDataOut);
    console.log(encodeDataErr);
    console.log("Those were all DNS");
 }

 async function flushingDNS(){
    const {stdout, stderr } = await cmdAsync("ipconfig /flushdns", {"encoding":"buffer"});
    const encodeDataOut = iconv.decode(stdout, "Cp852");
    const encodeDataErr = iconv.decode(stderr, "Cp852");
    console.log("Cleaning");
    console.log(encodeDataOut);
    console.log(encodeDataErr);
    console.log("DNS was Cleaned");
 }
export {
    releaseIp,
    renewIP,
    displayDNS,
    flushingDNS
}