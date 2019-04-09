import React, {Component} from 'react';

import './App.css';
import Person from './Components/Person'
import NextPageButton from './Components/NextPageButton'

let page = 1;

function buttonClickHandler(event) {
    const buttonName = event.target.innerHTML
    let next, previous
    if (buttonName === 'Next' && page < 3) {
        page++
    } else if (buttonName === 'Previous' && page >= 2) {
        page--
    }
    next = page >= 1 && page < 3 ? 'active' : 'passive'
    previous = page <= 3 && page > 1 ? 'active' : 'passive'
        this.setState({page: page, button: event.target.innerHTML, next: next, previous: previous})
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
                <Person page={this.state.page} button={this.state.button}/>
                <NextPageButton click={buttonClickHandler.bind(this)} next={this.state.next}
                                previous={this.state.previous}/>
            </div>
        );
    }
}

export default App;
