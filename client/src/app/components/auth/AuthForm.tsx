import * as React from 'react';
import * as validator from 'validator';
import { t, todo } from 'app/utils/translate';

import FormField from 'app/components/FormFieldComponent';
import Button from 'app/components/ButtonComponent';

interface IProps {
	buttonText: string;
	isForgotPassword?: boolean;
	isResetPassword?: boolean;
	onSubmit: (email: string, password: string) => void;
}

interface IState {
	email: string;
	password: string;
	inputValid: boolean;
}

export default class AuthForm extends React.Component<IProps, IState> {

	constructor(props: any) {
		super(props);

		this.state = {
			email: '',
			password: '',
			inputValid: false
		};
	}

	private emailChange(eValue: string) {
		this.setState({ email: eValue }, () => {
			this.validateInput();
		});
	}

	private passwordChange(eValue: string) {
		this.setState({ password: eValue }, () => {
			this.validateInput();
		});
	}

	private validateInput() {
		const { email, password } = this.state;
		const { isForgotPassword, isResetPassword } = this.props;

		const emailValid: boolean = isResetPassword || validator.isEmail(email);
		const passwordValid: boolean = isForgotPassword || password.length >= 6;

		this.setState({ inputValid: emailValid && passwordValid });
	}

	private submitAction(e: React.SyntheticEvent) {
		e.preventDefault();
		const { email, password } = this.state;
		this.props.onSubmit(email, password);
	}

	public render() {

		const { email, password, inputValid } = this.state;
		const { buttonText, isForgotPassword, isResetPassword } = this.props;

		return(
			<form className="form" onSubmit={ (e) => this.submitAction(e) }>
				{!isResetPassword &&
					<FormField
						value={ email }
						onChange={(e) => this.emailChange(e.target.value)}
						label={ t().email_label }
						type="email"
						placeholder={ t().email_placeholder }
					/>
				}

				{!isForgotPassword &&
					<FormField
					value={ password }
					onChange={(e) => this.passwordChange(e.target.value)}
					label={ t().password_label }
					type="password"
					placeholder={ t().password_placeholder }
					/>
				}
				<Button type="submit" text={ buttonText } disabled={ !inputValid } />
			</form>
		);
	}
}
