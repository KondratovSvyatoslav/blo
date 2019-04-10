import React, {useState} from 'react'

import '../css/comments.css'
import Button from '@material-ui/core/Button';

function scroll() {
    const elem = document.getElementsByClassName('comments')[0]
    setTimeout(function() {window.scrollBy(0, elem.scrollHeight )},0)
}

const comments = (props) => {
    const [state, changeState] = useState(props.child)
    return (
        <div className="comments">
            <Button variant="contained" color="primary" onClick={() => {changeState(props.child); props.addChild(); scroll() }}>Add Comment!</Button>
            <div className="comments">{state}</div>
        </div>
    )
}

export default comments
