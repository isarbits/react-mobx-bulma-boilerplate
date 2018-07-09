import * as React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'mobx-react';

import ScrollToTop from './utils/ScrollToTop';
import { t, todo } from 'app/utils/translate';

import NavbarComponent from 'app/components/NavbarComponent';
import HomeContainer from 'app/containers/HomeContainer';
import LoginContainer from 'app/containers/auth/LoginContainer';
import RegisterContainer from 'app/containers/auth/RegisterContainer';
import RegisterConfirmContainer from 'app/containers/auth/RegisterConfirmContainer';
import ForgotPasswordContainer from 'app/containers/auth/ForgotPasswordContainer';
import PasswordResetContainer from 'app/containers/auth/PasswordResetContainer';

import stores from './stores';

export default class App extends React.Component<any, any> {

	public render() {

		return (
			<Provider { ...stores }>
				<Router>
					<ScrollToTop>
						<NavbarComponent />
						<Route exact path="/" component={ HomeContainer }/>
						<Route exact path="/register" component={ RegisterContainer }/>
						<Route exact path="/register/confirm/:hash?" component={ RegisterConfirmContainer } />
						<Route exact path="/login" component={ LoginContainer }/>
						<Route exact path="/forgotpassword" component={ ForgotPasswordContainer }/>
						<Route exact path="/resetpassword/:hash" component={ PasswordResetContainer }/>
					</ScrollToTop>
				</Router>
			</Provider>
		);
	}
}
