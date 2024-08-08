// Tipos básicos
let isDone: boolean = true;
let age: number = 25;
let firstName: string = "John";

// Arrays
let numbers: number[] = [1, 2, 3, 4];
let names: Array<string> = ["Alice", "Bob"];

// Tuplas
let tuple: [number, string, boolean];
tuple = [1, "Hello", true];

// Enum
enum Color {
  Red = "#ffff",
  Green = "#f4f4f4",
  Blue = "#blblb"
}
let green: Color = Color.Green;

// Any
let notSure: any = 4;
notSure = "Maybe a string instead";
notSure = false;

// Void
function warnUser(): void {
  console.log("This is a warning message");
}
