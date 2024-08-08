interface IUser {
  nombre: string
  edad: number
  mascota?: boolean
  rol: Roles
}

interface Data<T> {
  users: T[]
}

enum Roles {
  ADMIN = "admin",
  CUSTOMER = "customer"
}

interface IBook {
  title: string
  author: string
  price: number
}

// function saludarUsuario(user: IUser): IUser {
//   return user
// }

// const greetingUser = (user: string): string => {
//   return ""
// }

// const usuarioPablo: IUser = {
//   nombre: "Pablo",
//   edad: 22,
//   mascota: true
// }

// const usuarioJuan: IUser = {
//   nombre: "Juan",
//   edad: 22
// }

// console.log(saludarUsuario(usuarioJuan))
// sumacion(1)

const indentity = <P>(arg: P) => {
  return arg
}
// const indentity = (arg: string) => {
//   return arg
// }

const getData = <T>(data: T) => {
  return data
}

const users = {
  users: [{
  nombre: "Pablo",
  edad: 22,
  mascota: true,
  rol: Roles.ADMIN
},
{
  nombre: "Pablo",
  edad: 22,
  mascota: true,
  rol: Roles.ADMIN
}, 
{
  nombre: "Pablo",
  edad: 22,
  mascota: true,
  rol: Roles.ADMIN
}]
}
const books: IBook = {
  title: "El simarillon",
  author: "Tolkien",
  price: 2000
}

console.log(getData<Data<IUser>>(users))

// let variable = 5
// variable = "Pablo"

// tsc app.ts
// const message: any = "Chau chau"
// console.log(message)

// const nameContainer = document.getElementById("name")

// nameContainer!.textContent = "Hola Pablo"