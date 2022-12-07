export const obj = {
  name: "Max",
  age: 30,
  hobbies: ["Sports", "Cooking"],
};

// const obj: {
//     name: string;
//     age: number;
//     hobbies: string[];
// }

//Defining a tuple in TS
const tuple: [string, number, string] = ["Hi", 234, "there"];
const anotherTuple: [string, number, string[], number] = [
  "hi",
  34,
  ["oops", "I", "did", "it", "again"],
  52,
];

// literal type, the type will be 4.6, not number
const literal = 4.6;

// Union Type, an OR for types

let val: string | number = 5;

//any type
let whatever: any = 0;
let arrays: any[] = [];

//Type Alias (declare at top of document)

type Biscuits = string | number | { food: string };

let mmm: Biscuits = "asdf";
mmm = 4;
// mmm = []    <-this would not work

//Function return types, note the :number after the parameters
function multiply(n1: number, n2: number): number {
  return n1 + n2;
}
// if function does not return a value, we use void.
//But void is inferenced, so it does not need to be declared generally. But it can be
function sayHi(name: string): void {
  console.log(`Hi ${name}!`);
}

//Mor function types
let func: Function;
//OR.....
let func2: (a: number, b: number) => number;
//^^ this allows us to be explicit about return types and parameter types

//callback function types

function big(a: string, b: number, c: (x: number) => number): number {
  let result = c(12);
  return b + result;
}
