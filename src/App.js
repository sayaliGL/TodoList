import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {value: '',listItems: []};
    //this.listItems=[];
    this.handleChange = this.handleChange.bind(this);
    this.saveTitle = this.saveTitle.bind(this);
    this.removeTitle = this.removeTitle.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  saveTitle(event) {
    event.preventDefault();
    let title = this.state.value;
    //console.log(title);
    this.state.listItems.push(title);
    this.setState(this.state.listItems);
    //console.log(this.state.listItems);
  }
  removeTitle(event,data){
    event.preventDefault();
    let filteredItems = this.state.listItems.filter(curtitem => {
      return curtitem !== data
      })
      this.setState({
        listItems: filteredItems,
      })
  }


    render() {
    return (
      <form >
        <div className="container">
          <input type="text"  className="input-box" value={this.state.value} placeholder="Title.." onChange={this.handleChange}/>
          <button className="add-button" onClick={this.saveTitle}>Add</button> 
          </div>
          <div id="list" >
         
          {(this.state.listItems || []).map((data, index) => 
                    <div className="list-item" key={index}>
                    <input type="checkbox" className="checkbox-button"></input>
                    <label>{data} </label>
                    <button className="remove-button"  onClick={(e) => this.removeTitle(e, data)}>X</button> </div>
                    )}
            </div>
      </form>
       
    );

  }
}
 

export default App;
