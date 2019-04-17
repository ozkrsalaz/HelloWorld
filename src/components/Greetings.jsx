import React, { Component } from 'react';

class Greetings extends Component {
	render() {
		const { name, cleanName } = this.props;
		return (
			<div>
				<p> {`Hola ${name}`}</p>
				<button onClick={cleanName}> Clean</button>
			</div>
		);
	}
}

export default Greetings;
