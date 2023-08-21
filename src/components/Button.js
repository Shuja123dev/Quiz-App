import React from 'react'

const Button = ({ children, handleClick, disable }) => {
    return (
        <button className={`primary-btn ${disable}`} style={{ background: '#db8c9d' }} onClick={handleClick}>
            {children}
        </button>
    )
}

export default Button
