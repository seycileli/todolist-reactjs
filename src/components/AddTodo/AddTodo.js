import React, {Component} from 'react';
import PropTypes from 'prop-types';

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

                <div style={
                    {display: "flex",
                    justifyContent: "center"}}

                    className='center ma2 pa3 br3 bg-dark-blue'
                    >

                    {/* search bar and submit button */}
                <input className='w-70 ma2 pa3' type="text" name="title"
                       onChange={this.onChange} placeholder={'Add Todo Item'}/>

                       <input className='w-70 ma2 pa3 pointer'
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
