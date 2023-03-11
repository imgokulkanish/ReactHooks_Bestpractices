import React from 'react'
import { useState, useRef } from 'react'
import { FormInput } from '../components/formInput'
const Form = () => {
    const [values, setValues] = useState({
        username: '',
        email: '',
        mobile: '',
        password: '',
        cpassword: '',
    })
    const inputs = [
        {
            id: 1,
            name: 'username',
            type: 'text',
            placeholder: 'username',
            label: 'Username',
            errorMessage:
                "Username should have 3-16 Characters and should't contain special characters",
            required: true,
            pattern: '^[A-Za-z0-9]{3,16}$',
        },
        {
            id: 2,
            name: 'email',
            type: 'email',
            placeholder: 'email',
            label: 'Email',
            errorMessage: 'It should be a valid email address',
            required: true,
        },
        {
            id: 3,
            name: 'mobile',
            type: 'number',
            placeholder: 'mobile',
            label: 'Mobile',
            errorMessage: 'Please enter a valid number',
            required: true,
            pattern: '/^(+d{1,3}[- ]?)?d{10}$/',
        },
        {
            id: 4,
            name: 'password',
            type: 'password',
            placeholder: 'password',
            label: 'Password',
            errorMessage:
                'Password should contain Minimum eight characters, at least one uppercase letter, one lowercase letter and one number',
            required: true,
            pattern: '^(?=.*[a-z])(?=.*[A-Z])(?=.*d)[a-zA-Zd]{8,}$',
        },
        {
            id: 5,
            name: 'cpassword',
            type: 'password',
            placeholder: 'confirm password',
            label: 'Confirm Password',
            errorMessage: "Passwords don't match",
            required: true,
            pattern: values.password,
        },
    ]
    // console.log('username', username)
    // const usernameRef = useRef()
    const onChange = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value })
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        const data = new FormData(event.target)
        // console.log('d', Object.fromEntries(data.entries()))
    }
    console.log('v', values)
    return (
        <div className="App">
            <form onSubmit={handleSubmit}>
                {inputs.map((input) => (
                    <FormInput
                        key={input.id}
                        {...input}
                        value={values[input.name]}
                        onChange={onChange}
                    />
                ))}
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Form