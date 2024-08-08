function sumacion(params) {
  console.log(1 + params)
}

// sumacion(1)

// let variable = 5
// variable = "Pablo"

// console.log(variable)

class User {
  constructor() {}
  // Metodo
  saludar(algo) {
    console.log("Hola " + algo)
  }
}

const user = new User()
user.saludar("Pablo")


const nameContainer = document.getElementById("name")

nameContainer.textContent = "Hola Pablo"