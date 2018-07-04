import * as React from 'react';
import { inject } from 'mobx-react';

import { t, todo } from 'app/utils/translate';
import Section from 'app/components/SectionComponent';
import Container from 'app/components/ContainerComponent';
import AuthStore from 'app/stores/AuthStore';
import AuthForm from 'app/components/auth/AuthForm';

interface IProps {
	auth: AuthStore;
}


@inject('auth')
export default class LoginContainer extends React.Component<IProps, any> {

	private formSubmit(email: string, password: string) {
		const { auth } = this.props;
		auth.login(email, password).then((res: any) => {
			console.info('Login successful', res);
		});
	}

	public render() {

		return(
			<Section>
				<Container>
					<div className="columns">
						<div className="column is-6 is-offset-3">
							<AuthForm title={ t().login } onSubmit={ (email, password) => this.formSubmit(email, password) }/>
						</div>
					</div>
				</Container>
			</Section>
		);
	}
}
