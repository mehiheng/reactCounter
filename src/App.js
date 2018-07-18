import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from "./component/Counter";


class App extends React.Component {
    constructor(props) {
        super();

    }
    render() {
        return (
            <div>
                <p>new</p>
               <Counter/>
            </div>
        )
    }
}


export default App;
