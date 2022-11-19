import v4 from "uuidv4"

//Date
let date = new Date();
const newDate = {
    day: date.getDay(),
    month: date.getMonth(),
    year: date.getFullYear()
}
const fullTime = `${newDate.day}/${newDate.month}/${newDate.year}`;

// Users
function User(name,lastName,email,id = v4.uuid(),time = fullTime,status = true){
    this.id = id,
    this.name = name,
    this.lastName = lastName,
    this.email = email,
    this.time = time,
    this.status = status
}
export default User
