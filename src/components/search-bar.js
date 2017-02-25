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
            <div className="search-bar">
                <input onChange={(event)=> this.setState({
                    searchTerm:event.target.value
                })}/>
            </div>
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