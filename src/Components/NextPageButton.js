import React, {useState} from 'react'

const nextPageButton = (props) => {

    return (
        <div>
            <button className={props.previous} onClick={props.click}>Previous</button>
            <button className={props.next} onClick= {props.click}>Next</button>
        </div>
    )
}

export default nextPageButton
