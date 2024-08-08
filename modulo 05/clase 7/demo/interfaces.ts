interface Person {
  firstName: string;
  lastName: string;
  age?: number; // Opcional
}

function greet(person: Person) {
  return `Hello, ${person.firstName} ${person.lastName}`;
}

let user = { firstName: "Jane", lastName: "Doe" };
console.log(greet(user));
