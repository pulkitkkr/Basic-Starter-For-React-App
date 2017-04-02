import React, {Component} from 'react';

 class SearchBar extends Component {
 	constructor(props){
 		super(props);
 		this.state = {term:'Hey'};
 	}
  
 	render() {
 		return (
 			<div>
 			<input value={this.state.term} onChange={e=> {this.setState({term: e.target.value}); } } type='text' />
 			 <br/>
 			 Value: {this.state.term}
 			 </div>
 		);	
 	}
 	
 };
export default SearchBar;