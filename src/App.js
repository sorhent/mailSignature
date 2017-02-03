import React, { Component } from 'react';
import ReactDOMServer from 'react-dom/server';
//import logo from './weekendesk.png';
import CopyToClipboard from 'react-copy-to-clipboard';
import Sign from './Sign'

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
        }
    }

    render() {
        const sign = <Sign/>;
        return (
            <div className="App">
                {sign}
                <CopyToClipboard text={ReactDOMServer.renderToString(sign)}
                                 onCopy={() => this.setState({copied: true})}>
                    <button>Copy</button>
                </CopyToClipboard>
            </div>
        );
    }
}

export default App;
