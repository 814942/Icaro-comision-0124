import { useState } from 'react'
import './App.css'
import Title from './Title'

function App() {
  const [count, setCount] = useState(0)
  const [students, setStudents] = useState("")

  const handleAddStudent = () => {
    alert(students)
  }

  return (
    <>
      <Title name="algo">
          <p>Hola Icaro</p>
      </Title>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <div>
        <input
          type="text"
          placeholder='Agrega un estudiante'
          onChange={(e) => setStudents(e.target.value)}
        />
        <button onClick={handleAddStudent}>Agregar</button>
      </div>
    </>
  )
}

export default App
