import * as React from 'react';
import { Route, HashRouter as Router } from 'react-router-dom';
import { Provider } from 'mobx-react';

import ScrollToTop from './utils/ScrollToTop';

import HomeContainer from './containers/HomeContainer';

import stores from './stores';

export default class App extends React.Component<any, any> {

	render() {

		return (
			<Provider { ...stores }>
				<Router>
					<ScrollToTop>
						<div className="app">
							<Route exact path="/" component={ HomeContainer }/>
						</div>
					</ScrollToTop>
				</Router>
			</Provider>
		)
	}
}