import React, { useState } from 'react'
import "./formInput.css"
export const FormInput = (props) => {
    const { label, onChange, id, errorMessage, ...inputProps } = props
    const [focused, setFocused] = useState(false)
    const handleFocus = (event) => {
        setFocused(true)
    }
    return (
        <div className="input">
            <label>{label}</label>
            <input {...inputProps} onChange={onChange} onBlur={handleFocus} focused={focused.toString()} onFocus={() => inputProps.name === 'cpassword' && setFocused(true)} />
            <span>{errorMessage}</span>
        </div>
    )
}

// onChange={(event) => props.setUsername(event.target.value)}
