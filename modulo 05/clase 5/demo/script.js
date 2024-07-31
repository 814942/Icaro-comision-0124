// guardarlos en el session storage
const $URL = "https://ghibliapi.vercel.app/films?limit="
let limit = 10

// recuperar datos de un API externa
const getData = async () => {
  // fetch($URL)
  //   .then(response => response.json())
  //   .then(response => console.log(response))
  try {
    const { data } = await axios.get(`${$URL}${limit}`)

    // guardamos la data
    sessionStorage.setItem("data", JSON.stringify(data))
    return data
  } catch (error) {
    console.log("🚀 ~ getData ~ error:", error)
  }
}

// renderizar los datos en nuestro HTML
const displayData = (data) => {
  // capturar el div con el id poke-container
  const divContainer = document.getElementById("poke-container")
  divContainer.innerText = ""
  // agregar un p y un img
  data.forEach(movie => {
    const divPokemon = document.createElement("div")

    divPokemon.innerHTML = `
    <p class="title"><strong>Pelicula: </strong>${movie.title}</p>
    <p class="title"><strong>Descripcion: </strong>${movie.description}</p>
    <img class="poke-img" src=${movie.movie_banner} alt="avatar">
    `
    // hacer el appendchild
    divContainer.appendChild(divPokemon)
  });
}

// antes que se renderice el HTML
document.addEventListener('DOMContentLoaded', async () => {
  // checkear si existe
  const dataStorage = sessionStorage.getItem("data")
  let data;

  if (!dataStorage) {
    data = await getData()
  }
  else {
    data = JSON.parse(dataStorage)
  }

  displayData(data)
})

const buttonGetMore = document.getElementById("btn")

buttonGetMore.addEventListener("click", async () => {
  limit += 10
  const data = await getData()
  displayData(data)
})