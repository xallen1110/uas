import React, { Component } from 'react';

class Search extends Component {
    state = {
        query: '',
    }

    handleChange = (event) => {
        this.setState({query: event.target.value});
    }

    handleSubmit = () => {
        this.props.handleSubmit(this.state.query);
    }

    render() {
        return (
            <form>
                <input 
                    type="text" 
                    value={this.state.query} 
                    onChange={this.handleChange} />
                <input type="button" value="Search" onClick={this.handleSubmit} />
            </form>
        );
    }
}

export default Search;
