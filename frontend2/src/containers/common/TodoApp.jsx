import React, {Component} from 'react'
import TodoList from '../../components/TodoList.jsx'

class TodoApp extends Component {

    constructor(props){
        super(props);
        this.state = { items:[], text:''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render(){
        return(
            <div>
                <h3>TODO</h3>
                <TodoList items = {this.state.items}></TodoList>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor = "new-todo">
                        What needs to be done?
                    </label>
                    <input id="new-todo" onChange={this.handleChange} value={this.state.text}></input>
                    <button>
                        Add #{this.state.items.length + 1}
                    </button>
                </form>
            </div>
        );
    }

    handleChange(e){
        this.setState({text: e.target.value});
    }

    handleSubmit(e){
        e.preventDefault();
        if(!this.state.text.length){
            return;
        }
        const newItem = {
            text : this.state.text,
            id : Date.now()
        };
        this.setState(state =>({
            items : state.items.concat(newItem),
            text: ''
        }));
    }

}

export default TodoApp;