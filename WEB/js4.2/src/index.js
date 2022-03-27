import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const userClassName = "user-info";
const styleObj = {
        color:'green',
        fontFamily:'Verdana'
};




const user = {
        id: 5,
        age: 33,
        firstName:'Nikita',
        secondName:'Kapralov',
        getFullName: function (){
            // eslint-disable-next-line no-template-curly-in-string
            return `${this.firstName} ${this.secondName}`;
        }

};


ReactDOM.render(
    <div className={userClassName} style={styleObj}>
            <p>Full name: {user.getFullName()}</p>
            <p>Age: {user.age}</p>
    </div>,
    document.getElementById('app')
)











// ReactDOM.render(
//     <h2>5+2={5+2}</h2>,
//     document.getElementById("app")
// )

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
