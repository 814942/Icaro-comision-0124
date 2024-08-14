import Title from './component/atoms/Title'
import Student from './component/page/student/Student'

import './App.css'

const App = () => {
  const dataStudents = [
    {
      id: 1,
      name: "Pablo",
      lenguaje: ['Js', 'C#'],
      intereces: ['Videojuegos', 'Musica']
    },
    {
      id: 2,
      name: "Ariel",
      lenguaje: ['Js', 'C++'],
      intereces: ['Pescar', 'Musica']
    },
    {
      id: 3,
      name: "Luz",
      lenguaje: ['Js', 'Java'],
      intereces: ['Patineta', 'Musica']
    }
  ]
  return (
    <div className='app-main'>
      <Title name="Hola Mundo" />
      <div className='app-container'>
      {
        dataStudents?.length && dataStudents.map(student => {
          return (
            <Student
              key={student.id}
              name={student.name}
              lenguaje={student.lenguaje}
              intereces={student.intereces}
            />
          )
        })
      }
      </div>
    </div>
  )
}

export default App