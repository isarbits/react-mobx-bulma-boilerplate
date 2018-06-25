import * as React from 'react';
import Section from 'app/components/SectionComponent';
import Container from 'app/components/ContainerComponent';
import FormField from 'app/components/FormFieldComponent';
import Button from 'app/components/ButtonComponent';

interface IState {
	email: string;
	password: string;
}

export default class LoginContainer extends React.Component<any, IState> {

	constructor(props: any) {
		super(props);

		this.state = {
			email: '',
			password: ''
		};
	}

	private loginClick() {
		const { email, password } = this.state;
		console.log(email, password);
	}

	public render() {

		const { email, password } = this.state;

		return(
			<Section>
				<Container>
					<div className="columns">
						<div className="column is-6 is-offset-3">
							<div className="box">
								<h1 className="title">Login</h1>
								<FormField value={ email } onChange={(e) => this.setState({email: e.target.value})} label="E-mail Address" placeholder="E-mail Address" />
								<FormField value={ password } onChange={(e) => this.setState({password: e.target.value})} label="Password" type="password" placeholder="Password" />
								<Button onClick={() => this.loginClick() } text="Login" />
							</div>
						</div>
					</div>
				</Container>
			</Section>
		);
	}
}
