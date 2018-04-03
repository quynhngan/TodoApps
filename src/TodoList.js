import React, { Component } from 'react';
import './TodoList.css';
import Display from "./Display";

class TodoList extends Component {
    constructor(props){
        super(props);
        this.state = {
            items: []
        };
        this.addItem = this.addItem.bind(this);
    }
    addItem(e) {
        if (this.inputElement.value !== "") {
          var newItem = {
            text: this.inputElement.value,
            key: Date.now(),
          };
       
          this.setState((prevState) => {
            return { 
              items: prevState.items.concat(newItem) 
            };
          });
         
          this.inputElement.value = "";
        }
         
        console.log(this.state.items);
           
       e.preventDefault();
      }
  render() {
    return (
        <div className="todoList">
        <div className="header">
          <form onSubmit={this.addItem}>
            <input ref={(a) => this.inputElement = a}
                placeholder="enter task">
            </input>
            <button type="submit">add</button>
          </form>
        </div>
            <Display entries={this.state.items}/>
        </div>
    );
  }
}

export default TodoList;