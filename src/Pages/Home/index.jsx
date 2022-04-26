import React, { useState } from 'react'
import { Card } from '../../componentes/Card'
import './style.css'
export function Home() {
  const [studentName, setStudentname] = useState()
  const [students, setStudents] = useState([])

  function handleAddStudent(){
    console.log("SOu muito gato")
    const newStudent = {
      name: setStudentname,
      time: new Date().toLocaleTimeString("pt-BR",{
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      })
    }

    setStudents([newStudent])
  }

  return (
    <div className='container'>
      <h1>Nome: {studentName}</h1>
      <input type="text" placeholder="Digite o nome..."
        onChange={e => setStudentname(e.target.value)}></input>
      <button type="button">Adicionar</button>

      {students.map(student => <Card name={student.name} time={student.time} />)}

    </div>
  )
}

