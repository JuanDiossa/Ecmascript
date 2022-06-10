//Metodo flat
let array = [1,2,3, [4,5,6, [7,8,9]]];
console.log(array.flat(2));//mostrar los datoso y niveles del array

let array1 = [1,2,3,4,5];//recorrer el array
console.log(array1.flatMap(value =>[value, value * 2]));

let hello = "    hello world";
console.log(hello);
console.log(hello.trimStart());//eliminar espacio en string incio
let bye = "bye   "
console.log(bye);
console.log(bye.trimEnd());//eliminar espacio en string final
//----//
try {
    
} catch {//no es necesario pasar el error como parametro
    error
}
//----------//

let entries = [["name", "juan"],["age",26]];
console.log(Object.fromEntries(entries));//convierte un array ne un objeto
//----------//
//objeto de tipo simbolo
let mySymbol = "My symbol";
let symbol = Symbol(mySymbol);
console.log(symbol.description);//acceder a un elemento de tipo simbolo
