const fan = document.getElementById("fan-img")

document.getElementById('container').addEventListener('click', function(event) {
  if (event.target.classList.contains('button')) {
    handleButtonClick(event.target);
  }
});

function handleButtonClick(button) {
  switch (button.id) {
    case 'button-on':
      console.log('Fan turned ON');
      fan.style.animationDuration = 5 + "s"
      break;
    case 'button-off':
      console.log('Fan turned OFF');
      fan.style.animationDuration = 0 + "s"
      break;
    case 'button-1':
      console.log('Speed set to 1');
      fan.style.animationDuration = 3 + "s"
      break;
    case 'button-2':
      console.log('Speed set to 2');
      fan.style.animationDuration = 2 + "s"
      break;
    case 'button-3':
      console.log('Speed set to 3');
      fan.style.animationDuration = 1 + "s"
      break;
    default:
      console.log('Button not recognized');
  }
}