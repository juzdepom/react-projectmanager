import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
    render() {
        // console.log('TodoItem props', this.props)
        return (
            //note: in JSX you can't use 'class' as an attribute
            <li className="todoItem">
                <strong>{this.props.todo.id}</strong>: {this.props.todo.title}
            </li>
        );
    }
}

TodoItem.propTypes = {
    todo: PropTypes.object,
}

export default TodoItem;