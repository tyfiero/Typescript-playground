class User {
  constructor(name, age, country) {
    this.name = name;
    this.age = age;
    this.country = country;
  }

  greetUser() {
    console.log(`Hello ${this.name} from ${this.country}`);
  }

  annoyinglyGreetUser(repeat) {
    for (let x = 0; x < repeat; x++) {
      this.greetUser();
    }
  }
}

class Child extends User {
  constructor(grade) {
    super("Timmy", 5, "Mexico");
    this.grade = grade;
  }
}

const sarah = new User("Sarah", 14, "Poland");

sarah.annoyinglyGreetUser(5);
