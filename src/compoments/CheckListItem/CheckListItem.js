import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

const CheckListItem = (props) => {
    return (
        <div className="d-flex">
            <div className="p-4 align-self-start">
                <FontAwesomeIcon icon={faCheck} size="2x" />
            </div>
            <div className="p-4 align-self-end">
                {props.children}
            </div>
        </div>
    )
}

export default CheckListItem
