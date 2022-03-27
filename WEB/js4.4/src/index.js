import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {seconds: 0};
    }

    tick() {
        this.setState(state => ({
            seconds: state.seconds + 1
        }));
    }

    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render(){
        return(
            <div>
                Seconds: {this.state.seconds}
            </div>
        )
    }
}

ReactDOM.render(
    <Timer />,
    document.getElementById("timer-example")
)




//First variation
class HelloMassage extends React.Component {
    render() {
        return <h1>Hello, {this.props.name}</h1>
    }
}

ReactDOM.render(
    <HelloMassage name="Nikita"/>,
    document.getElementById("app")
)

// //Second variation
// function Hello(){
//     return <h1>Привет!</h1>
// }
//
// ReactDOM.render(
//     Hello(),
//     document.getElementById("app")
// )

// //Third variation
// var Hello = () =>{
//     return (<h1>Привет!</h1>)
// }
//
// ReactDOM.render(
//     Hello(),
//     document.getElementById("app")
// )






reportWebVitals();
