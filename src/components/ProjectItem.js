import React, { Component } from 'react';

class ProjectItem extends Component {
    render() {
        return (
            //note: in JSX you can't use 'class' as an attribute
            <li className="project">
                <strong>{this.props.project.title}</strong>: {this.props.project.category}
            </li>
        );
    }
}

export default ProjectItem;