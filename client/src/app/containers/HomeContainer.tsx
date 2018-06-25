import * as React from 'react';

import NavbarComponent from 'app/components/NavbarComponent';

export default class HomeContainer extends React.Component {

	public render() {
		return(
			<div className="home">
				<NavbarComponent />
				<h1>HOMEX</h1>
			</div>
		);
	}
}
