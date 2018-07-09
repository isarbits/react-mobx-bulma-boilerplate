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

interface IState {
	emailSubmitted: boolean;
}

@inject('auth')
export default class RegisterContainer extends React.Component<IProps, IState> {

	constructor(props: any) {
		super(props);

		this.state = {
			emailSubmitted: false
		};
	}

	private formSubmit(email: string, password: string) {
		const { auth } = this.props;
		auth.register(email, password).then((res: any) => {
			console.info('Registration submitted', res);
			this.setState({ emailSubmitted: true });
		});
	}

	public render() {

		const { emailSubmitted } = this.state;

		return(
			<Section>
				<Container>
					<div className="columns">
						<div className="column is-6 is-offset-3">
							<div className="box">
								<h1 className="title">{ t().register }</h1>
								{!emailSubmitted ? (
									<AuthForm buttonText={ t().register } onSubmit={ (email, password) => this.formSubmit(email, password) }/>
								) : (
									<div className="content">
										<h1 className="title">{ t().register_confirm_title }</h1>
										<p>{ t().register_confirm_text }</p>
									</div>
								)}
							</div>
						</div>
					</div>
				</Container>
			</Section>
		);
	}
}
