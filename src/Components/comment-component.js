import React, {Component} from 'react'


import CommentText from './comment-text'
import CommentInput from './comment-input'
import Comments from './comments'


function handleComment(event) {
    this.setState({text: event.target.value})
}


function addChild() {
    this.child.push(<CommentText text={this.state.text}/>)
    this.setState({text:this.state.text, child: this.child})
}


class commentComponent extends Component {
    constructor() {
        super()
        this.state = {text: 'Dummy text will be changed from input', child: this.child}
        this.child = []
    }

    render() {
        return (
            <div className="comments-component">
                <p>Comments!</p>
                <CommentText text={this.state.text}/>
                <CommentInput change={handleComment.bind(this)}/>
                <Comments addChild={addChild.bind(this)} child = {this.child}/>
            </div>
        )
    }


}

export default commentComponent
