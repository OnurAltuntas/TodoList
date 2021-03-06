import React, { Component } from "react";
import TodoItems from "./TodoItems";
import "./TodoList.css"

class TodoList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            items : []
        };

        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }


    addItem(e){
        if(this._inputElement.value !==""){
            var newItem = {
                text : this._inputElement.value,
                key:Date.now()
            };

            this.setState((prevState) => {
                return {
                    items : prevState.items.concat(newItem)
                };
            });
        }


        this._inputElement.value="";

        console.log();
        e.preventDefault();
    }
    
    deleteItem(key){
        console.log("Deleted key " + key)

        var filteredItems = this.state.items.filter
        (function(item){
            console.log("item key " + item.key)
            return(item.key !==key)
        });

        this.setState({
            items: filteredItems
        });
    
    }

   

    render() {
        return (
          <div className="todoListMain">
            <div className="header">
                <form onSubmit={this.addItem}>
                    <input  ref={(a => this._inputElement = a)}
                    placeholder="enter task">
                    </input><style></style>
                    <button type="submit" >Add</button>
                </form>
            </div>
            <TodoItems entries={this.state.items}
                    delete={this.deleteItem}/>
          </div>  
        );
    }
}   

export default TodoList;
