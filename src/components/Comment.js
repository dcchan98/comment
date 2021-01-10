import React, { Component } from "react";

export default class Comment extends Component {
	render() {
		return (
      <div class='comment'>
					<a class='avatar'>
						<img src='/images/avatar/small/elliot.jpg' />
					</a>
					<div class='content'>
						<a class='author'>Elliot Fu</a>
						<div class='metadata'>
							<span class='date'>Yesterday at 12:30AM</span>
						</div>
						<div class='text'>
							<p>This has been very useful for my research. Thanks as well!</p>
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
