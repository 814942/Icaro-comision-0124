document.addEventListener('DOMContentLoaded', (event) => {
  const button = document.getElementById('myButton');
  const message = document.getElementById('message');

  button.addEventListener('click', () => {
      message.textContent = 'Button was clicked!';
      message.style.color = 'green';
  });
});

document.addEventListener("keydown", (e) => {
  if (e.key === "v") {
    document.body.style.background = "violet"
  }
});

let lastx;
const bar = document.getElementById("div_i")
bar.addEventListener("mousedown", (e) => {
  if (e.button === 0) {
    lastx = e.clientX

    window.addEventListener("mousemove", moved)
    e.preventDefault()
  }
})

function moved(e) {
  if (e.buttons === 0) {
    window.removeEventListener("mousemove", moved)
  }
  else {
    const dist = e.clientX - lastx
    const newWidth = Math.max(10, bar.offsetWidth + dist)
    bar.style.width = newWidth + "px"
    bar.style.height = newWidth + "px"
    lastx = e.clientX
  }
}

const div_pink = document.getElementById('div_x');
div_pink.addEventListener("mouseenter", (e) => {
  div_pink.style.background = "black"
})
div_pink.addEventListener("mouseleave", (e) => {
  div_pink.style.background = "pink"
});

// document.body.appendChild(document.createTextNode("Hola vite".repeat(1000)))
const div_progress = document.getElementById('progress');
window.addEventListener("scroll", (e) => {
  let max = document.body.scrollHeight - 1500
  div_progress.style.width = 10 / max * 100
  div_progress.style.background = "pink"
});

const p_paragrafh = document.getElementById('paragrafh');
const button_paragrafh = document.getElementById('button-paragrafh');
p_paragrafh.addEventListener("mousedown", (e) => {
  console.log("Console for: ", e.target.textContent)
})
button_paragrafh.addEventListener("mousedown", (e) => {
  console.log("Console for: ", e.target.textContent)
  if (e.button === 2){
    e.stopPropagation()
  }
})

const a_link = document.getElementById("a-link")
document.addEventListener("click", (e) => {
  console.log("Coso")
  e.preventDefault()
})