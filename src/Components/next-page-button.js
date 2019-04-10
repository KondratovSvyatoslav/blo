import React from 'react'
import Button from '@material-ui/core/Button';

import '../css/next-button.css'

const nextPageButton = (props) => {
const nextButtonDisabled = props.next === 'passive'
const previousButtonDisabled = props.previous === 'passive'
    return (
        <div className="button">
            <Button variant="contained" color="primary" disabled={previousButtonDisabled} onClick={props.click}>Previous</Button>
            <Button variant="contained" color="primary" disabled={nextButtonDisabled} onClick= {props.click}>Next</Button>
        </div>
    )
}

export default nextPageButton
