import './App.css'
import {useMemo, useState} from "react";
import ButtonDecrement from "./components/ButtonDecrement.jsx";
import ButtonIncrement from "./components/ButtonIncrement.jsx";
import RegistrationForm from "./components/RegistrationForm.jsx";

const STUDENTS = [
    {id: 1, name: "Anna", score: 39},
    {id: 2, name: "John", score: 74},
    {id: 3, name: "Bob", score: 20},
    {id: 4, name: "Alice", score: 89}
]

function App() {
    const [number, setNumber] = useState(0)

    const doubledNumber = useMemo(() => {
        return number * 2;
    }, [number])

    return <div>
        <div>Number: {number}</div>
        <div>Doubled number: {doubledNumber}</div>
        <button onClick={() => setNumber((prev) => prev + 1)}>Increase</button>
    </div>

    //Student Registry Exercise
    // const [students, setStudents] = useState(STUDENTS)
    //
    // return <div>
    //     <RegistrationForm setStudents={setStudents}/>
    //     <div>The list of students:</div>
    //
    //     <ul>
    //         {
    //             students.map((student) => <li key={student.id}>{student.name} - {student.score}</li>)
    //         }
    //     </ul>
    // </div>


    //Counter exercise
    // const [count, setCount] = useState(0)
    //
    // return (
    //     <div>
    //         <div>Count: {count}</div>
    //         <div>
    //             {count > 0 ? "The count is larger than zero!!" : "The count is zero or below!!"}
    //         </div>
    //         <div>
    //             <ButtonIncrement setCount={setCount}/>
    //             <ButtonDecrement setCount={setCount}/>
    //         </div>
    //     </div>
    // )
}

export default App
