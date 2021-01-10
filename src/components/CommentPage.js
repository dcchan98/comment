/** @format */
import faker from "faker";
import React, { Component } from "react";
import Comment from "./Comment.js";
import ReplySection from "./ReplySection.js";
import ApprovalCard from "./ApprovalCard.js";

export default class CommentPage extends Component {
	render() {
		return (
			<div className='ui comments'>
				<h3 className='ui dividing header'>Comments</h3>
				<Comment
					profileImage={faker.image.image()}
					name='Sean Chan '
					commentText='How Cool is that'
					date='Yesterday'
				/>
				<Comment
					profileImage={faker.image.image()}
					name='Ding Chao'
					commentText='How Cool is that'
					date='Yesterday'
				/>

				<ApprovalCard>
					<Comment
						profileImage={faker.image.image()}
						name='Ding Chao'
						commentText='How Cool is that'
						date='Yesterday'
					/>
				</ApprovalCard>

				<ReplySection />
			</div>
		);
	}
}
