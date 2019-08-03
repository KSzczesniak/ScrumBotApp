import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

const CheckListItem = ({ children, size = 1 }) => {
    return (
        <div className="d-flex">
            <div className={`p-${size * 2} align-self-start`}>
                <FontAwesomeIcon icon={faCheck} size={`${size}x`} />
            </div>
            <div className={`p-${size * 2} align-self-end`}>
                {children}
            </div>
        </div>
    )
}

export default CheckListItem
