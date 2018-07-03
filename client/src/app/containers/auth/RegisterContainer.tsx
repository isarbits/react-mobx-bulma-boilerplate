import * as React from 'react';
import * as validator from 'validator';

import { t, todo } from 'app/utils/translate';
import Section from 'app/components/SectionComponent';
import Container from 'app/components/ContainerComponent';
import FormField from 'app/components/FormFieldComponent';
import Button from 'app/components/ButtonComponent';
import AuthStore from 'app/stores/AuthStore';
import { inject } from 'mobx-react';

interface IState {
	email: string;
	password: string;
	inputValid: boolean;
	auth?: AuthStore;
}

@inject('auth')
export default class RegisterContainer extends React.Component<any, IState> {

	constructor(props: any) {
		super(props);

		this.state = {
			email: '',
			password: '',
			inputValid: true
		};
	}

	private emailChange(eValue: string) {
		this.setState({ email: eValue });
		this.validateInput();
	}

	private passwordChange(eValue: string) {
		this.setState({ password: eValue });
		this.validateInput();
	}

	private validateInput() {
		const { email, password } = this.state;
		//this.setState({ inputValid: validator.isEmail(email) && password.length >= 6 });
	}

	private buttonClick() {
		const { email, password } = this.state;
		const { auth } = this.props;

		console.log(auth.register(email, password));

	}

	private formSubmit(e: React.SyntheticEvent) {
		e.preventDefault();
		const { email, password } = this.state;
		const { auth } = this.props;

		console.log(auth.register(email, password));
	}

	public render() {

		const { email, password, inputValid } = this.state;

		return(
			<Section>
				<Container>
					<div className="columns">
						<div className="column is-6 is-offset-3">
							<div className="box">
								<h1 className="title">{ t().register }</h1>

								<form className="form" onSubmit={(e) => this.formSubmit(e)}>
									<FormField
										value={ email }
										onChange={(e) => this.emailChange(e.target.value)}
										label={ t().email_label }
										type="email"
										placeholder={ t().email_placeholder }
									/>
									<FormField
										value={ password }
										onChange={(e) => this.passwordChange(e.target.value)}
										label={ t().password_label }
										type="password"
										placeholder={ t().password_placeholder }
									/>
									<Button type="submit" text={ t().register } disabled={ !inputValid } />
								</form>
							</div>
						</div>
					</div>
				</Container>
			</Section>
		);
	}
}
