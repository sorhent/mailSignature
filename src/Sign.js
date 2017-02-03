import React, { Component } from 'react';
import logo from './weekendesk.png';

const formStyle = {
    display: 'block'
};
const resultStyle = {
    display: 'block'
};

const logoStyle = {
    display: 'block'
};

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: 'Name',
            title: 'title',
            phone: 'phone',
            email: 'email'
        }
    }

    onTextInputChangeName(event) {
        this.setState({
            name: event.target.value
        })
    };

    onTextInputChangeTitle(event) {
        this.setState({
            title: event.target.value
        })
    };

    onTextInputChangePhone(event) {
        this.setState({
            phone: event.target.value
        })
    };

    onTextInputChangeEmail(event) {
        this.setState({
            email: event.target.value
        })
    };

    handleCopy(event) {
        console.log("copied", event);
    }


    render() {
        return (
            <div className="App">
                <div>
                    <input style={formStyle}
                           type="text"
                           value={this.state.name}
                           onChange={this.onTextInputChangeName.bind(this)}/>
                    <input style={formStyle}
                           type="text"
                           value={this.state.title}
                           onChange={this.onTextInputChangeTitle.bind(this)}/>
                    <input style={formStyle}
                           type="text"
                           value={this.state.phone}
                           onChange={this.onTextInputChangePhone.bind(this)}/>
                    <input style={formStyle}
                           type="text"
                           value={this.state.email}
                           onChange={this.onTextInputChangeEmail.bind(this)}/>
                </div>

                <div style={resultStyle}>
                    <div>{this.state.name}</div>
                    <div>{this.state.title}</div>
                    <div>{this.state.phone}</div>
                    <div>{this.state.email}</div>
                </div>

                <img style={logoStyle} src={logo}/>
            </div>
        );
    }
}

export default App;
