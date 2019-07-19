import React from 'react'
import './ErrorPage.css'

const ErrorPage = () => {
    return (
        <div className = 'errorPage-Container'>
            <div className = 'error-img'>
                <h1>:(</h1>
            </div>
            <div className = 'error-msg'>   
                <h3>404 - Page not Found</h3>
                <p>The page you are looking for might have been removed or is temporarily unavailable</p>
            </div>
        </div>
    )
}

export default ErrorPage