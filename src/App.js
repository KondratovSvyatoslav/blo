import React, {Component} from 'react';

import './css/App.css';
import MainContent from './Components/main-content'
import NextPageButton from './Components/next-page-button'
import Comment from './Components/comment-component'

let page = 1;

function buttonClickHandler(event) {
    const buttonName = event.target.innerText
    let next, previous
    if (buttonName === 'NEXT' && page < 3) {
        page++
    } else if (buttonName === 'PREVIOUS' && page >= 2) {
        page--
    }
    next = page >= 1 && page < 3 ? 'active' : 'passive'
    previous = page <= 3 && page > 1 ? 'active' : 'passive'
        this.setState({page: page, button: event.target.innerText, next: next, previous: previous})
}

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: page,
            button: 'next',
            next: 'active',
            previous: 'passive',
        };
    }

    render() {
        return (
            <div>
                <MainContent page={this.state.page} button={this.state.button}/>
                <NextPageButton click={buttonClickHandler.bind(this)} next={this.state.next}
                                previous={this.state.previous}/>
                <Comment/>
            </div>
        );
    }
}

export default App;
