import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Post from './components/Posts';
import PostForm from './components/PostForm';

class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">Welcome to React</h1>
				</header>
				<div className="App-intro">
					<PostForm />
					<Post />
				</div>
			</div>
		);
	}
}

export default App;
