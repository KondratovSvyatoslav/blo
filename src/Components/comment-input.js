import React from 'react'
import Input from '@material-ui/core/Input';

const commentInput = (props) => {
    return <Input type="text" className="comments-input" placeholder="Leave your comment" onChange={props.change}/>
}

export default commentInput
