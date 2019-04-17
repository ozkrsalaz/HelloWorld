import React, { Component } from 'react';
import Greetings from '../components/Greetings';

class Index extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: 'German'
		};
	}

	onChangeName = ({ target: { value: name } }) => {
		console.log(name);
		this.setState({ name });
	};

	cleanName = () => {
		this.setState({ name: '' });
	};

	render() {
		const { name } = this.state;
		return (
			<div>
				<p>
					Hello world del chalan Index.
					<br />
					<label>
						Name:
						<input type="text" name="name" value={name} onChange={this.onChangeName} />
					</label>
				</p>
				<Greetings name={name} cleanName={this.cleanName} />
			</div>
		);
	}
}

export default Index;
