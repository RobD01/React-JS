export class Person {
  constructor(name) {
    this.name;
  }
  walk() {
    console.log("walk");
  }
}

const Jojo = new Teacher("Jojo", "Math");
Jojo.teach();
Jojo.walk();
console.log(Jojo.degree);
