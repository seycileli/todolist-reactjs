import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Todos from "./components/Todos/Todos";
import Header from "./components/Layout/Header";
import AddTodo from "./components/AddTodo/AddTodo";
import About from "./components/Pages/About";
import './App.css';
import 'tachyons';
import axios from "axios";

class App extends Component {
    state = {
        todos: []
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5')
            .then(response => this.setState({todos: response.data}))
    }

    /* ToDo Item marked complete */
    markComplete = (id) => {
        this.setState({
            todos: this.state.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo;
            })
        })
    }

    /* Delete button for Todo Item */
    delTodo = (id) => {
        axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
            .then(response =>
                this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]}))
    }

    /* Add Todo Item */
    addTodo = (title) => {
        axios.post('https://jsonplaceholder.typicode.com/todos', {
            title,
            completed: false
        })
            .then(response => this.setState({todos: [...this.state.todos, response.data]}))
    }

    render() {
        return (
            <Router>
                <div className="App">
                    {/* add styling within that div below */}
                    <div>
                        <Header/>
                        <Route exact path='/' render={props => (
                            <React.Fragment>
                                <AddTodo addTodo={this.addTodo}/>
                                <Todos todos={this.state.todos} markComplete={this.markComplete}
                                       delTodo={this.delTodo}/>
                            </React.Fragment>
                        )}/>

                        <Route path='/about' component={About}/>

                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
