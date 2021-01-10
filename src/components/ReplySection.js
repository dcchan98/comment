import React, { Component } from "react";

export default class Comment extends Component {
	render() {
		return (
      <form class='ui reply form'>
      <div class='field'>
        <textarea></textarea>
      </div>
      <div class='ui blue labeled submit icon button'>
        <i class='icon edit'></i> Add Reply
      </div>
    </form>
		);
	}
}
