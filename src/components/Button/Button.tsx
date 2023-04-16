import React from 'react'

interface ButtonProps {
    children: React.ReactNode
    variant?: 'primary' | 'secondary'
    size?: 'small' | 'medium' | 'large'
    onClick?: () => void
}

const Button: React.FC<ButtonProps> = ({ children, variant, size, onClick }) => {
    const handleOnClick = () => {
        if (onClick) {
            onClick()
        }
    }

    return (
        <button className={`button ${variant} ${size}`} onClick={handleOnClick}>
            {children}
        </button>
    )
}

export default Button
