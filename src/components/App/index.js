// src/components/App/index.js
import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';
import {Link} from 'react-router';
import logo from './logo.svg';
import './style.css';

class App extends Component {
    // static propTypes = {}
    // static defaultProps = {}
    // state = {}

    render() {
        const { className, ...props } = this.props;
        return (
            <div className={classnames('App', className)} {...props}>
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Welcome to React</h2>
                </div>
                <p className="App-intro">
                    <p className="App-intro">
                        To get started, edit <code>src/App.js</code> and save to reload.
                        <p><Link to="/home">Home</Link></p>

                        <p><Link to="/contact">Contact</Link></p>

                        <p><Link to="/notexist">Not Exist</Link></p>
                        {this.props.children}
                    </p>
                </p>
            </div>
        );
    }
}

export default App;