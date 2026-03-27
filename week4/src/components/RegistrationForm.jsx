import {useState} from "react";

function RegistrationForm({setStudents}) {
    const [form, setForm] = useState({name: "", score: 0})

    const registerStudent = () => {
        if(!form.name && !form.score) return;

        setStudents((prevStudents) => {
            return [...prevStudents,
                {id: Date.now(), name: form.name, score: form.score}
            ]
        })

        setForm({name: "", score: 0})
    }

    return <div>
        <input placeholder="Name" value={form.name}
               onChange={(event) =>
                   setForm((prevForm) => {
                       return {
                           ...prevForm,
                           name: event.target.value
                       }
                   })}/>
        <input placeholder="Score"
               value={form.score}
               onChange={(event) =>
                   setForm((prevForm) => {
                       return {...prevForm, score: event.target.value}
                   })}
        />
        <button onClick={registerStudent}>Register Student</button>
    </div>
}

export default RegistrationForm;