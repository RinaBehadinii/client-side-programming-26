import {useState, useEffect, useCallback} from 'react'
import './App.css'
import RegisterForm from "./components/RegisterForm.jsx";

const users = [
  { id: 1, name: "Alice", score: 92, active: true, role: "student" },
  { id: 2, name: "Bob", score: 45, active: false, role: "student" },
  { id: 3, name: "Carol", score: 78, active: true, role: "guest" },
];

function App() {
  const [students, setStudents] = useState(null)

  const addStudents = useCallback((student)=> {
    setStudnets((prev) => {return [...prev, student]})
  }, [])

  useEffect(()=> {

    setTimeout(() => {
      setStudents(users)
    }, 2000)
  }, [])

  if(!students) return <div>Loading...</div>

  return <div>
    <h1>Student List</h1>

    <RegisterForm addStudents={addStudents}/>

    {
      students.map((student) => {
        return <div key={student.id}>{student.name} -
                    {student.score} -
                    {student.active ? "Active" : "Not Active"} -
                    {student.role}</div>
      })
    }
  </div>
}

export default App
