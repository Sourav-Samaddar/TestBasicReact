import React, { Component } from 'react';

class Message extends Component {
    
    constructor() {
        super();
        this.state = {
            message: 'Welcome My Friends To React Training'
        }
    }

    onSubscribe() {
        this.setState({
            message: 'ThankYou for subscribing'
        })
    }

    render() {
        return (
            <div>
               <h1>{this.state.message}</h1> 
               <button onClick={() => this.onSubscribe()} >Subscribe</button>
            </div>
        );
    }
}

export default Message;