import * as React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'mobx-react';

import ScrollToTop from './utils/ScrollToTop';

import NavbarComponent from 'app/components/NavbarComponent';
import HomeContainer from './containers/HomeContainer';
import LoginContainer from './containers/auth/LoginContainer';

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
					</ScrollToTop>
				</Router>
			</Provider>
		);
	}
}
