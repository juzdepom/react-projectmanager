import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';
import uuid from 'uuid'


class Todos extends Component {
    // deleteProject(id){
    //     this.props.onDelete(id);
    // }
    render() {
        let todoItems;
        if(this.props.todos){
            todoItems = Object.keys(this.props.todos).map(key => {
                // console.log('TODO: ', this.props.todos[key])
                //console.log(project)
                return (
                    <TodoItem key={key} todo={this.props.todos[key]} />
                )
            });
        }
        return (
            <div className="Todos">
                <h3>Current Todos </h3>
                {todoItems}
            </div>
        );
    }
}

Todos.propTypes = {
    todos: PropTypes.array,
}

export default Todos;
