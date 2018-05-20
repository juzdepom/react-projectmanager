import React, { Component } from 'react';
import uuid from 'uuid'
import Projects from './components/Projects';
import AddProject from './components/AddProject';
import $ from 'jquery';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
        projects: [],
        todos: [],
    }
  }
  getToDos(){
    $.ajax({
      url: 'https://jsonplaceholder.typicode.com/todos',
      dataType: 'json',
      cache: false,
      success: function(data){
        this.setState({todos: data}, function(){
          console.log(this.state)
        })
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
      }
    })
  }
  getProjects(){
    this.setState({projects:
      [
        {
            id: uuid.v4(),
            title: 'Business Website',
            category: 'Web Design'
        },
        {
            id: uuid.v4(),
            title: 'Social App',
            category: 'Mobile Development'
        },
        {
            id: uuid.v4(),
            title: 'Ecommerce Shopping Cart',
            category: 'Web Development'
        },
      ]
    })
  }
  componentWillMount(){
    this.getProjects();
    this.getToDos();
  }
  componentDidMount(){
    this.getToDos();
  }
  handleAddProject(project){
    let projects = this.state.projects;
    projects.push(project);
    this.setState({projects: projects})
  }
  handleDeleteProject(id){
    let projects = this.state.projects;
    let index = projects.findIndex(x => x.id === id); //new syntax
    projects.splice(index, 1);
    this.setState({projects: projects})

  }
  render() {
    var appStyle = {
      marginLeft: '20px',
    };
    return (
      <div className="App" styles={appStyle}>
        <h2>My App</h2>
        <AddProject addProject={this.handleAddProject.bind(this)}/>
        <Projects projects={this.state.projects} onDelete={this.handleDeleteProject.bind(this)}/>

      </div>
    );
  }
}

export default App;
