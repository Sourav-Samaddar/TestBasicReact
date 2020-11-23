import React, { Component } from 'react';

class Count extends Component {

    constructor() {
        super();
        this.state = {
            count: 0
        }
    }

    increment(){
        this.setState({
            count: this.state.count + 1 
        },
        () => {
            console.log('After increment Value',this.state.count);
        }
        )
    }

    incrementOnPreviousState(){
        this.setState((previousState) => ({
            count: previousState.count + 1
        }))
    }

    incrementByFive(){
        this.incrementOnPreviousState()
        this.incrementOnPreviousState()
        this.incrementOnPreviousState()
        this.incrementOnPreviousState()
        this.incrementOnPreviousState()
    }

    render() {
        return (
            <div>
                Count is {this.state.count} <br />
                <button onClick={() => this.increment()}>increment</button> <br />
                <button onClick={() => this.incrementByFive()}>incrementBy5</button>
            </div>
        );
    }
}

export default Count;