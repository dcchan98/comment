/** @format */

import React, { Component } from "react";

export default class ApprovalCard extends Component {
	render() {
		return (
			<div>
				<div class='ui cards'>
					<div class='card'>
						<div>{this.props.children}</div>

						<div class='extra content'>
							<div class='ui two buttons'>
								<div class='ui basic green button'>Approve</div>
								<div class='ui basic red button'>Decline</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
