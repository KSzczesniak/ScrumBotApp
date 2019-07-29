import React from 'react'

const Content = ({ children }) => {
    return (
        <div className="flex-grow-1 bg-light">
            {children}
        </div>
    )
}

export default Content
