const form = document.getElementById('form')
const input = document.getElementById('input')
const select = document.getElementById('dropdown')

select.addEventListener('click', function (e) {
  e.preventDefault()
})

form.addEventListener('submit', function (event) {
  // Aca hacemos nuestra logica
  event.preventDefault()
  console.log("Nombre: ", input.value)
  console.log("Ciudad: ", select.value)
})