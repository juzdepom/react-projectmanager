import React, { Component } from 'react';

class AddProject extends Component {
    static defaultProps = {
        categories: ["Web Design", "Web Development", "Mobile Development"]
    }
    render() {
        return (
            //note: in JSX you can't use 'class' as an attribute
            <div>
                <h3>Add Project </h3>
                <form>
                    <div>
                        <label>Title</label><br />
                        <input type="text" ref="title"/>
                    </div>
                    <div>
                        <label>Category</label><br />
                        <select ref="category"></select>
                    </div>
                </form>
            </div>
        );
    }
}

export default AddProject;