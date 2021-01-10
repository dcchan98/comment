/** @format */

import React, { Component } from "react";

export default class ApprovalCard extends Component {
	render() {
		return (
			<div>
				<div className='ui cards'>
					<div className='card'>
						<div className='content'>
							<div>{this.props.children}</div>
						</div>

						<div className='extra content'>
							<div className='ui two buttons'>
								<div className='ui basic green button'>Approve</div>
								<div className='ui basic red button'>Decline</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
