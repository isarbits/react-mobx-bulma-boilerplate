import * as React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'mobx-react';

import ScrollToTop from './utils/ScrollToTop';
import { t, todo } from 'app/utils/translate';

import NavbarComponent from 'app/components/NavbarComponent';
import HomeContainer from './containers/HomeContainer';
import LoginContainer from './containers/auth/LoginContainer';
import RegisterContainer from './containers/auth/RegisterContainer';
import RegisterConfirmContainer from './containers/auth/RegisterConfirmContainer';

import stores from './stores';

export default class App extends React.Component<any, any> {

	public render() {

		return (
			<Provider { ...stores }>
				<Router>
					<ScrollToTop>
						<NavbarComponent />
						<Route exact path="/" component={ HomeContainer }/>
						<Route exact path="/login" component={ LoginContainer }/>
						<Route exact path="/register" component={ RegisterContainer }/>
						<Route exact path="/register/confirm/:hash?" component={ RegisterConfirmContainer } />
					</ScrollToTop>
				</Router>
			</Provider>
		);
	}
}
