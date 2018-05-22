import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from "../actions/postAction";
import PropTypes from 'prop-types'

class Posts extends Component {
	constructor(props) {
		super(props);
		this.state = {
			posts: []
		}
	}

	componentWillMount() {
		this.props.fetchPosts();
	}
	componentWillReceiveProps(nextProps) {
		if (nextProps) {
			this.props.posts.unshift(nextProps.newPost);
		}
	}

	render() {
		const postItems = this.props.posts.map(post => (
			<div key={post.id}>
				<h3> {post.title} </h3>
				<p> {post.body} </p>
			</div>
		))
		return (
			<div>
				<h1> Post </h1>
				{postItems}
			</div>
		);
	}
}
const mapStateToProps = state => ({
	posts: state.posts.items,
	newPost: state.posts.item
});

Posts.protoTypes = {
	fetchPosts: PropTypes.func.isRequired,
	posts: PropTypes.array,
	newPost: PropTypes.object
}

export default connect(mapStateToProps, { fetchPosts })(Posts);
