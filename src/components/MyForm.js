import React, { Component } from 'react';

class MyForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userName : "Sourav",
            address : "Hyd",
            language : "React"
        }
    }

    handleUserNameChange = event => {
        this.setState({
            userName: event.target.value
        })
    }

    handleAddressChange = event => {
        this.setState({
            address: event.target.value
        })
    }

    handleLanguageChange = event => {
        this.setState({
            language: event.target.value
        })
    }

    handleSubmit = event => {
        alert(`This is ${this.state.userName} ${this.state.language} ${this.state.address}`)
        event.preventDefault()
    }
    

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>UserName  </label>
                    <input type="text" 
                    value={this.state.userName} 
                    onChange={this.handleUserNameChange}
                    />
                </div>
                <div>
                    <label>Address  </label>
                    <textarea  value={this.state.address} 
                    onChange={this.handleAddressChange}
                    />
                </div>
                <div>
                    <label>Language  </label>
                    <select value={this.state.language} onChange={this.handleLanguageChange}>
                        <option value="React">React</option>
                        <option value="Angular">Angular</option>
                        <option value="Vue">Vue</option>
                    </select>
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>

            </form>
        );
    }
}

export default MyForm;