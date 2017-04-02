import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar.js';
import YTSearch from 'youtube-api-search';
var arg = 'Yo';
const API_KEY = 'AIzaSyBGCSdyidSplst-5FjvLtMAT3E_7S-SVfw';
class App extends Component{
	constructor(props){
		super(props);
		 this.state ={searchTerm:''}; 
		 


	}
	
	onClickButton(e){
		 YTSearch({key: API_KEY, term: this.state.searchTerm},(data) =>{
		 	console.log(data);});

	}
	render(){

		return (
		  <div>
		  		<SearchBar onChange={(e) =>{this.setState({searchTerm:e.taeget.value});}} />&nbsp;&nbsp;&nbsp;
		  		<button onClick={this.onClickButton} >Search</button>
		  </div>
		);
	}
};

 
ReactDOM.render(<App></App>,document.querySelector('.container'));