function newFunction(name, age, country){
    var name = name || 'oscar';
    var age = age || 25;
    var country = country || "colombia";

    console.log(name, age, country)
}

//es6
function newFunction2(name = "oscar", age = 25, country="COL"){
    console.log(name, age, country);
}

newFunction2();//retorna los datos que se le pasaron por defecto
newFunction2("Juan", 26, "COL");//retorna los datos que se pasaron como parametro

//Template literal
//concatenación de variables
let hello = "hello";
let world = "world";
let epicPhrase = `${hello} ${world}`; //<- 

//concatenación con template literal
let lorem = "frase epica para concatenar en multi-linea \n"
+ "y aca continua";
//es6
let loremes6 = `esta es otra frase epica para concatenar
con template literal`;

console.log(lorem);
console.log(loremes6);
//--------------//
//Destructuración de elementos

let person = {
    "name": "Juan",
    "age": 26,
    "country": "COL"
}

console.log(person.name, person.age);

//es6
let {country } = person;
console.log(country);

//-----------//
//Operador de propagación
let team1 = ["oscar", "Juan", "Ricardo"];
let team2 = ["valen", "astrid", "lillyam"];

let education = ["David", ...team1, ...team2];//es6
console.log(education);

//-----------//
//Variables Let y Const y scope

{
    var globalVar = "Global Var";//el scope de var es global, funciona en todo el documento
}

{
    let globalLet = "Global Let";//let es de scope local, solo en el bloque en el que se declara
    console.log(globalLet);
}

console.log(globalVar);

const a = "b";//Const es una constante, no cambia
console.log(a);

//----------------//
//Propiedad de objetos mejorada
let name = "juan";
let age = 26;
//es5
obj = { name: name, age: age};
//es6
obj2 = { name, age };
console.log(obj2);

//-------------------//
//Arrow function

const names = [
    { name: "Juan", age: 26},
    { name: "Kennia", age: 24}
]
//es5
let listNames = names.map(function(item){
    console.log(item.name);//retorna "Juan", "Kennia"
})
//es6 Arrow function
let listNames2 = names.map(item => console.log(item.name));

const listNames3 = (name, age) => {
    console.log();
}

const listNames4 = name => {
    //bloque de codigo
}

const square = num => num * num;
console.log(square(26));

//----------------//
//Promesas - para trabajar el asincronismo - js no es un lenguaje sincronico
const helloPromise = () => {//arrow function
    return new Promise((resolve, reject) => {//retornamos una promesa
        if(true){//validamos la promesa, si es el valor que necesitamos o si está OK
            resolve("Todo bien!");//resolve si todo sale bien
        }else{
            reject("F!")//reject si algo sale mal
        }
    });
}

helloPromise()//Ejecutamos la promesa (funcion)
    .then(response => console.log(response))//con .then obtenemos la respuesta de la promesa y se ejecuta con una aFunction 
    .then(() => console.log("hola"))//se pueden anidar n cantidad de .then para mostrar información
    .catch(error => console.log(error));//si es rechazaada la promesa .catch nos resgresa el error

//--------------------------//
//Clases, Módulos y Generadores
class calculator {
    constructor(){//metodo constructor, para inicialiazar el objeto/clase
        this.valueA = 0;
        this.valueB = 0;
    }

    sum(valueA, valueB){//Metodo = funcion que realiza el objeto
        this.valueA =  valueA;
        this.valueB =  valueB;
        return this.valueA + this.valueB;
    }
}

const calc = new calculator();//inicializamos un nuevo objeto
console.log(calc.sum(4,9));//mostramos el objeto con su metodo y los parametros necesario

//Módulos
//Import y Export

import { hello } from "./module";//así importamos contenido o logica desde otros archivos .js
hello();

//Generators
function* helloWorld(){
    if(true){
        yield "Hello, ";
    }
    if(true){
        yield "World";
    }
};

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);