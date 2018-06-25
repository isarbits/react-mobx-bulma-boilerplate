import * as React from 'react';
import Section from '../components/SectionComponent';
import Container from '../components/ContainerComponent';
import { Link } from 'react-router-dom';

export default class HomeContainer extends React.Component {

	public render() {
		return(
			<Section>
				<Container>
					<h1 className="title">Quickstart</h1>
					<ul>
						<li><Link to="/login">Login</Link></li>
						<li><Link to="/register">Register</Link></li>
						<li><Link to="/password-reset">Password Reset</Link></li>
					</ul>
				</Container>
			</Section>
		);
	}
}
