function add(num1: number, num2: number, num3?: number): number{
    return num3? num1 + num2 + num3 : num1 + num2;
}

console.log(add(2,2));
console.log(add(2,2,3));

const sub = (num1: number, num2: number, num3 = 10): number => num1 - num2 - num3;

console.log(sub(2,3));
console.log(sub(2,3,5));

const mult = function(num1: number, num2: number): number{
    return num1* num2;
}

console.log(mult(2,3));

function add2(num1: number, num2: number, ...num3: number[]): number{
    return num1 + num2 + num3.reduce((a, b) => a+b,0);
}

let numbers = [1,2,3,4,5,6];
console.log(add2(2,3,...numbers));
console.log(add2(2,3,4,5,6,7,8,9,10));

function getItems<Type>(items: Type[]): Type[]{ //permet de retourner une liste du type que l'on veut
    return new Array<Type>().concat(items);
}

let concatResult = getItems<number>([1,2,3,4,5]);
let concatString = getItems<string>(["a","b","c","d","e"]);