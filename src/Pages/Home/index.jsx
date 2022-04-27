import React, { useState } from 'react'
import './style.css'
import { Card } from '../../componentes/Card'

export function Home() {
  const [studentName, setStudentname] = useState("")
  const [students, setStudents] = useState([])

  function handleAddStudent(){
    const newStudent = {
      name: studentName,
      time: new Date().toLocaleTimeString("pt-BR",{
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      })
    }

    setStudents((prevState) => [...prevState, newStudent])
  }

  return (
    <div className='container'>
      <h1>Lista de presença</h1>
      <input type="text" placeholder="Digite o nome..."
        onChange={(e) => setStudentname(e.target.value)}></input>
      <button type="button" onClick={handleAddStudent}>Adicionar</button>

      {students.map((student) => (<Card name={student.name} time={student.time} />))}

    </div>
  )
}

