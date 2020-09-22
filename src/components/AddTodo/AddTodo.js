import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './AddTodo.css';

export class AddTodo extends Component {
    state = {
        title: ''
    }

    onSubmit = (e) => {
        e.preventDefault()
        this.props.addTodo(this.state.title)
        this.setState({title: ''})
    }

    onChange = (e) => this.setState({[e.target.name]: e.target.value});

    render() {
        return (
            <form onSubmit={this.onSubmit}>

                <div
                    style={
                    {display: "flex",
                    justifyContent: "center"}}

                    className='center w-75 ma2 pa1 br3 input-bg-clr shadow-3'>

                    {/* search bar and submit button */}
                <input className='ma2 pa3 br3 shadow-5 w-70' type="text" name="title"
                       onChange={this.onChange} placeholder={'Add Todo Item'}/>

                       <input className='
                       ma2 pa3 br3 shadow-5
                       white bg-navy hover-bg-light-blue grow'
                              type="submit" value="Submit"  style={{flex: '1'}}/>
                </div>
            </form>
        );
    }
}

// PropTypes
AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired
}

export default AddTodo;
