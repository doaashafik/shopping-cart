import React from 'react';
import './ErrorMessage.scss'
export const ErrorMessage = ({ message }) => {
    return (
        <div className="error-message">
            {message}
        </div>
    )
}