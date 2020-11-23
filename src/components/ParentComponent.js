import React, { Component } from 'react';
import ChildComponent from './ChildComponent';

class ParentComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            parentName: 'parent'
        }

        this.greetParent = this.greetParent.bind(this)
    }
    
    greetParent(child){
        alert(`Hello ${this.state.parentName} from ${child}`)
    }

    render() {
        return (
            <div>
                <h1>This is Parent Component : </h1>
                <ChildComponent greetHandler= {this.greetParent}/>
            </div>
        );
    }
}

export default ParentComponent;