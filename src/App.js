import React, { Component } from 'react';
import Projects from './components/Projects';
import AddProject from './components/AddProject';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
        projects: []
    }
  }
  componentWillMount(){
    this.setState({projects:
      [
        {
            title: 'Business Website',
            category: 'Web Design'
        },
        {
            title: 'Social App',
            category: 'Mobile Development'
        },
        {
            title: 'Ecommerce Shopping Cart',
            category: 'Web Development'
        },
      ]
    })
  }
  handleAddProject(project){
    console.log(project)
  }
  render() {
    return (
      <div className="App" styles={{padding : '20px'}}>
        My App
        <Projects projects={this.state.projects}/>
        <AddProject addProject={this.handleAddProject.bind(this)}/>
      </div>
    );
  }
}

export default App;
