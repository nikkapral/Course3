import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


class Hello extends React.Component {

    constructor(props) {
        super(props);
        this.state = {class: "off", label: "Press me!"};

        this.press = this.press.bind(this);
    }

    press(){
        let className = (this.state.class==="off") ? "on":"off";
        this.setState({class: className});
        console.log(this.state)
    }
    render() {

        return  <div>
            <p>Имя: {this.props.name}</p>
            <p>Возраст: {this.props.age}</p>
            <button onClick={this.press} className={this.state.class}>{this.state.label}</button></div>;
    }
}

ReactDOM.render(
    <Hello name="Nikita Kapralov" age="21" />,
    document.getElementById("root")
)




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
