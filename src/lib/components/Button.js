import React from 'react'
const Button = ({kind, id, type, name, value, disabled, handleClick, label}) => {
    return (
        <button className={`btn btn--${kind} CTA`}
            data-id={id}
            type={type}
            name={name}
            value={value}
            disabled={disabled}
            onClick={handleClick}>
            <h4>{label}</h4>
        </button>
    )
}
export default Button