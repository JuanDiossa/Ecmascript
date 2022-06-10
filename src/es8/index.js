//Obeject.entries - Obeject.values
const data = {
    frontend: "Juan",
    backend: "kennia",
}

const entries = Object.entries(data);//entries para convertir un objeto en array 
console.log(entries);
console.log(entries.length);

const values = Object.values(data);//values devuelve en array los valores del obejto
console.log(values);

//-------//
//padding - agregar caracteres a un string

const string = "hello";
console.log(string.padStart(8,"hi "));//agregar caracteres al inicio del string
console.log(string.padEnd(8,"---"));//agregar caracteres al final del string

const obj = {
    name: "juan",//se puede dejar la coma incluso si despues no se agrega otro valor
}
//------------------//
//Async & Await
const helloWorld = () => {
    return new Promise((resolve, reject) =>{
        (false) ? setTimeout(()=> resolve("hello world"), 3000) : reject(new Error("error alv"));
    })
}

const helloAsync = async () =>{
    const hello = await helloWorld();
    // const hello2 = await helloWorld();
    console.log(hello);
}

helloAsync();

const anotherFunction = async () =>{
    try {
        let hello = await helloWorld();
        console.log(hello);
    } catch (error) {
        console.log(error);
    }
}

anotherFunction();