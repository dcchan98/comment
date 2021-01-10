import React, { Component } from "react";


export default class Comment extends Component {
	render() {
		return (
      <div class='comment'>
					<a class='avatar'>
						<img src={this.props.profileImage} />
					</a>
					<div className='content'>
						<a className='author'>{this.props.name}</a>
						<div className='metadata'>
							<span className='date'>{this.props.date}</span>
						</div>
						<div className='text'>
							<p>{this.props.commentText}</p>
						</div>

            {/* ####### Reply Section Not Used Yet */}

						{/* <div class='actions'>
							<a class='reply'>Reply</a>
						</div> */}
					</div>

          {/*  ########## Nested comment for reply */}

					{/* <div class='comments'>
						<div class='comment'>
							<a class='avatar'>
								<img src='/images/avatar/small/jenny.jpg' />
							</a>
							<div class='content'>
								<a class='author'>Jenny Hess</a>
								<div class='metadata'>
									<span class='date'>Just now</span>
								</div>
								<div class='text'>Elliot you are always so right :)</div>
								<div class='actions'>
									<a class='reply'>Reply</a>
								</div>
							</div>
						</div>
					</div> */}
				</div>
		);
	}
}
