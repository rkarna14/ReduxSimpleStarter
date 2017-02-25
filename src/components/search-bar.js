import React, { Component } from "react";

class SearchBar extends Component {
    constructor(props){
        super(props);

        this.state = {
            searchTerm : ''    
        }
    }

    render(){
        return (
            //<input onChange={this.onInputChange}/>
            <input onChange={(event)=> this.setState({
                searchTerm:event.target.value
            })}/>
        );
    }
    
    onInputChange(event){
        this.setState(
            {
                searchTerm: event.target.value
            }
        );
    }
}

export default SearchBar;