import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const propsValues = {
    title : "List of students",
    items : [
        "Student 1",
        "Student 2",
        "Student 3",
        "Student 4",
        "Student 5",
        "Student 6",
    ]
};

class ClickButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {class : "off", label :"Press me!"}
        this.press = this.press.bind(this);

        console.log("constructor")
    }

    componentWillReceiveProps(nextProps) {
        console.log("componentWillReciveProps()")
    }
}

class Item extends React.Component {
    render() {
        return <li>{this.props.name}</li>
    }
}

class SearchPlugin extends React.Component {
    constructor(props) {
        super(props);
        this.onTextChanged = this.onTextChanged.bind(this);
    }

    onTextChanged(e){
        var text = e.target.value.trim(); //Delete space
        this.props.filter(text)
    }

    render() {
        return <input placeholder={"Search"} onChange={this.onTextChanged} />
    }

}

class Itemlist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {items: this.props.data.items};
        this.filterList = this.filterList.bind(this);
    }

    filterList(text) {
        var filteredList =
            this.props.data.items.filter(function (item){
            return item.toLowerCase().search(text.toLowerCase()) !== -1;
        });
        this.setState({items : filteredList});
    }

    render() {
        return(
            <div>
                <h2>{this.props.data.title}</h2>
                <SearchPlugin filter={this.filterList} />
                <ul>
                    {
                        this.state.items.map(function(item){
                            return <Item key={item} name={item} />
                        })
                    }
                </ul>
            </div>);
    }
}

ReactDOM.render(
    <ItemList data={propsValues} />,
    document.getElementById("root")
)
















reportWebVitals();
