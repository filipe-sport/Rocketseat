import { useState } from 'react'
import "./style.css"
import { Card } from '../../components/Card';


export function Home() {
  const [studentName, setStudentName] = useState('')
  const [students, setStudents] = useState([])
  return (
    <div className='container'>
      <h1>Lista de Presença</h1>
      <input type="text" placeholder="Digite o nome..." 
        onChange={e => setStudentName(e.target.value)}
      />    
      <button type='button'>Adicionar</button>

    {/* Usando os components */}
    
    {
      <Card name = "Rodrigo" time = "10:55:25" />
    }  
    </div>
  )
}


