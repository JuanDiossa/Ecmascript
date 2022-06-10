//operador de reposo - extraer propiedades de un obejto
const obj = {
    name: "juan",
    age: 26,
    country: "COL",
}

let { name, ...all } = obj;//destructuracion de datos en objetos
console.log(all);

const obj2 = {
    ...obj,//agregar un objeto en otro
    lastname: "Diossa",
}
console.log(obj2);

//saber cuando ha terminado el llamado de una promesa
const ej = () => {
    return new Promise((resolve, reject) => {
        (true) 
        ? setTimeout(()=> resolve("Hola ejemplo"), 3000)
        : reject(new Error("error alv"))
    });
}

ej()
    .then(response=>{console.log(response)})
    .catch(error =>{console.log(error)})
    .finally(()=>{console.log("Casi que no")})
//-----------------//
//regex
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec("2022-06-09");
const year = match[1];
const month = match[2];
const day = match[3];

console.log(year);
console.log(year,month,day);