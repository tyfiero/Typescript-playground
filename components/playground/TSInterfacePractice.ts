interface Person {
  name: string;
  age: number;
  hobbies: string[];
}

let user: Person;

user = {
  name: "Max",
  age: 30,
  hobbies: ["Sports", "Cooking"],
};

const genericFunction = <T, U>(param: T, otherParam: U) => {
    if(typeof param ==="string"){
        console.log(param , otherParam);
    }
};
