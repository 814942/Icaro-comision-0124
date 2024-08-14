/* eslint-disable react/prop-types */
import './student.css'

const Student = ({ name, lenguaje, intereces }) => {

  const lenguajesFormated = lenguaje?.join(", ")
  const interesFormated = intereces?.join(", ")

  return (
    <div className='student-class'>
      <h2>Nombre: {name}</h2>
      <h3>Lenguaje: {lenguajesFormated}</h3>
      <h3>Interes: {interesFormated}</h3>
    </div>
  )
}

export default Student