/** @format */

import React, { Component } from "react";
import Comment from "./Comment.js"
import ReplySection from "./ReplySection.js"

export default class CommentPage extends Component {
	render() {
		return (
			<div class='ui comments'>
				<h3 class='ui dividing header'>Comments</h3>
				<Comment/>
				<Comment/>
				<ReplySection/>
			</div>
		);
	}
}
