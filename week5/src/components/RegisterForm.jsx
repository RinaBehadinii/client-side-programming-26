import {useState, useRef} from "react";

const INITIAL_VALUES = {
    name: "",
    score: 0,
    active: false,
    role: "student"
}

function RegisterForm ({addStudents}) {
    const [form, setForm] = useState(INITIAL_VALUES)
    const nameRef = useRef(null)

    function onChangeValue (e) {
       const {name, value} = e.target

        setForm((prev) => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    function onChangeCheckbox (e) {
        setForm((prev) => {
            return {
                ...prev,
                active: e.target.checked
            }
        })
    }

    function register () {
        if(form.name === "") return;

        const newStudent = {
            id: Date.now(),
            name: form.name,
            score: form.score,
            active: form.active,
            role: form.role
        }

        addStudents(newStudent);
        setForm(INITIAL_VALUES)
        nameRef.current.focus()
    }

    return <div>
        <div>Register New Student</div>

        <div>
            <input ref={nameRef} name="name" placeholder="Name" type="text" value={form.name} onChange={(e)=> onChangeValue(e)}/>
            <input name="score" placeholder="0" type="number" value={form.score} onChange={onChangeValue}/>
            <label>
                <input name="active" type="checkbox" checked={form.active} onChange={onChangeCheckbox}/>
            </label>

            <select name="role" value={form.role} onChange={onChangeValue}>
                <option value="student">Student</option>
                <option value="guest">Guest</option>
            </select>

            <button onClick={register}>Register</button>
        </div>

    </div>
}

export default RegisterForm;