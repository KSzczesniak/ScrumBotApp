import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

function CheckListItem(props) {
    return (
        <div class="d-flex">
            <div class="p-4 align-self-start">
                <FontAwesomeIcon icon={faCheck} size="2x" />
            </div>
            <div class="p-4 align-self-end">
                {props.children}
            </div>
        </div>
    )
}

export default CheckListItem
