import React from 'react'
import { useForm } from '../custom/useForm'
function Form() {
    const initialState = {
        userName: "",
        email: "",
        password: ""
    }
    const [value, handleChange] = useForm(initialState)
    const SubmitHandler = (e) => {
        e.preventDefault()
        console.log(value);
    }
    return (
        <div className="wrapper">
            <form onSubmit={SubmitHandler} action="#">
                <h4>Welcome </h4>
                <input onChange={handleChange} value={value.userName} name="userName" type="text" required={true} />
                <input onChange={handleChange} value={value.email} name="email" type="email" required={true} />
                <input onChange={handleChange} value={value.password} name="password" type="password" required={true} />
                <input className='submit' type="submit" />
            </form>
        </div>
    )
}

export default Form
