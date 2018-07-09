import * as React from 'react';
import { inject } from 'mobx-react';

import { t, todo } from 'app/utils/translate';
import Section from 'app/components/SectionComponent';
import Container from 'app/components/ContainerComponent';
import AuthStore from 'app/stores/AuthStore';
import AuthForm from 'app/components/auth/AuthForm';
import { Link } from 'react-router-dom';

interface IProps {
	auth: AuthStore;
}

@inject('auth')
export default class LoginContainer extends React.Component<IProps, any> {

	private formSubmit(email: string, password: string) {
		const { auth } = this.props;
		auth.login(email, password).then((res: any) => {
			console.info('Login successful', res);
			// redirect to dashboard
		});
	}

	public render() {

		return(
			<Section>
				<Container>
					<div className="columns">
						<div className="column is-6 is-offset-3">
							<div className="box">
								<h1 className="title">{ t().login }</h1>
								<AuthForm buttonText={ t().login } onSubmit={ (email, password) => this.formSubmit(email, password) } />
								<nav className="level is-mobile">
									<div className="level-left"></div>
									<div className="level-right">
										<Link to="/forgotpassword" className="level-item">{ t().forgot_password }</Link>
									</div>
								</nav>
							</div>
						</div>
					</div>
				</Container>
			</Section>
		);
	}
}
