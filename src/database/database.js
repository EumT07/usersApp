import {join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import {Low , JSONFile} from "lowdb";

let db;
const __dirname = dirname(fileURLToPath(import.meta.url));

async function createConnectionLownDb(){
    //File
    const file = join(__dirname, "../data.json");
    const adapter = new JSONFile(file);
    db = new Low(adapter);

    await db.read();
    db.data ||= {Users: []};
    await db.write();
}
 
//data
const getConnection = () => db;

export {
    createConnectionLownDb,
    getConnection
 }