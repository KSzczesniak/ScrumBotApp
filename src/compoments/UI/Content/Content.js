import React from 'react'

const Content = ({ children }) => {
    return (
        <div className="flex-grow-1 bg-light d-flex flex-column">
            {children}
        </div>
    )
}

export default Content
