enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

const person = {
  name: "Max",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: Role.ADMIN,
};

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}
