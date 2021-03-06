import React from "react";

class Counter extends React.Component {

    constructor(props){
        // noinspection JSAnnotator
        super();
        this.state={
            count : 0
        }

    }
    add=()=>{
        this.setState((prevState) => ({
            count: prevState.count +1
        }));
    }



    sub=()=>{
        this.setState((prevState) => ({
            count: prevState.count -1
        }));
    }

    render() {
        return (
            <div>
                <button onClick={this.add} >+</button>
                <button onClick={this.sub} >-</button>
                <span>{this.state.count}</span>
            </div>
        )
    }
}

export default Counter;