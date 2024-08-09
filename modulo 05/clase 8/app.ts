// declare const axios: any;
// const $URL = "https://rickandmortyapi.com/api/character"

// const fetchData = async () => {
//   try {
//     const res = await axios.get($URL)
//     console.log("🚀 ~ fetchData ~ res:", res)
//   } catch (error) {
//     console.log("🚀 ~ fetchData ~ error:", error)
    
//   }
// }

// document.addEventListener("DOMContentLoaded", () => {
//   fetchData()
// })

// Esto es un clase principal
// class Houses {
//   // Atributos o campos
//   name: string
//   words: string

//   // El constructor
//   constructor(name: string , words: string) {
//     // inicizlizamos nuestros campos
//     this.name = name
//     this.words = words
//   }

//   // esto es un metodo
//   getHouse() {
//     console.log(`My name is: ${this.name} and this are my words: ${this.words}`)
//   }
// }

// // Esta es la forma de herederar una clase
// // Esta es una clase secundaria
// class Characters extends Houses {
//   name: string

//   constructor(chracterName: string, words: string) {
//     super(chracterName, words)
//     this.name = ""
//   }
// }

// const starkHouse = new Houses("Stark", "Winter is comming")
// const jon = new Characters("Jon", "Winter is comming")

// // console.log(starkHouse);
// console.log(jon);


// let promiseOne = new Promise((res, rej) => {
//   try {
//     setTimeout(() => {
//       return console.log("Primer promesa");
//     }, 1500)
//   } catch (error) {
//     console.log("🚀 ~ promiseOne ~ error:", error)
//   }
// })

// let promiseTwo = new Promise((res, rej) => {
//   try {
//     setTimeout(() => {
//       return console.log("Segunda promesa");
//     }, 500)
//   } catch (error) {
//     console.log("🚀 ~ promiseOne ~ error:", error)
//   }
// })

// interface IPropiedades {
//   name: string
//   age: number
// }

// const myArray: [number, number, boolean] = [1, 2, true]

// const otherFunction = (arg: IPropiedades[]) => {
//   console.log(arg);
  
// }
// const users1: IPropiedades = {
//   name: "Pablo",
//   age: 22
// }

// const users2: IPropiedades = {
//   name: "MaNu",
//   age: 22
// }

// otherFunction([users1, users2])
