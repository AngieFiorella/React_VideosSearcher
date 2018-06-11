import React, {Component} from 'react';

class SearchBar extends Component {
  //How to define or initialize a state in a class component
  constructor(props){
    super(props);
    this.state = {term: ''};
  }
  render(){
    return(
      <div>
        <input 
          value={this.state.term}
          //onChange={(event)=> this.setState({term: event.target .value})}/>
					onChange={(event)=> this.onInputChange(event.target.value)} />
      </div>
    );
	}
	onInputChange(term){
		this.setState({
			term: term
		});
		this.props.onVideoSearch(term);
	}
}

export default SearchBar;