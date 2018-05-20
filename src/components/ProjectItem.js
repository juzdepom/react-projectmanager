import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProjectItem extends Component {
    deleteProject(id){
        this.props.onDelete(id);
    }
    render() {
        return (
            //note: in JSX you can't use 'class' as an attribute
            <li className="project">
                <strong>{this.props.project.title}</strong>:{this.props.project.category}&nbsp;&nbsp;
                <a href="#" onClick={this.deleteProject.bind(this, this.props.project.id)}>X</a>
            </li>
        );
    }
}

ProjectItem.propTypes = {
    project: PropTypes.object,
    deleteProject: PropTypes.func
}

export default ProjectItem;