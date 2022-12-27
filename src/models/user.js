import idRandom from "uuid-random"

//Date
let date = new Date();
let newDate = {
    day: date.getDate(),
    month: date.getMonth() + 1,
    year: date.getFullYear(),
    hour: date.getHours(),
    minutes: date.getMinutes(),
}
const fullTime = `${newDate.day}/${newDate.month}/${newDate.year} / ${newDate.hour}:${newDate.minutes} hrs`;

// Users
function User(name,lastName,email,cellphone,id = idRandom(),time = fullTime,status = true){
    this.id = id,
    this.name = name,
    this.lastName = lastName,
    this.email = email,
    this.cellphone = cellphone,
    this.time = time,
    this.status = status
}

export default User
