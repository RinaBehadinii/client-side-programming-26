import './App.css'
import StudentCard from "./components/StudentCard.jsx";

const STUDENTS = [
  {id: 1, name: "Alice", score: 93},
  {id: 2, name: "Bob", score: 33},
  {id: 3, name: "John", score: 73},
  {id: 4, name: "Aria", score: 55},
  {id: 5, name: "Dany", score: 97},
  {id: 5, name: "Adam", score: 7},
]

function App() {
  return (<div>
    <div>Student Score Board</div>

    {STUDENTS.map((student) => {
      return <StudentCard
          id={student.id}
          name={student.name}
          score={student.score}/>;
    })}

    {/*<StudentCard name="Alice" score="93"/>*/}
    {/*<StudentCard name="Bob" score="33"/>*/}
    {/*<StudentCard name="John" score="73"/>*/}
    {/*<StudentCard name="Aria" score="55"/>*/}
  </div>)
}

export default App
