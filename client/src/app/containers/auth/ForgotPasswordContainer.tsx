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
export default class ForgotPasswordContainer extends React.Component<IProps, IState> {

	constructor(props: any) {
		super(props);

		this.state = {
			emailSubmitted: false
		};
	}

	private formSubmit(email: string) {
        const { auth } = this.props;
        auth.forgotPassword(email).then((res: any) => {
            console.info('Password reset submitted', res);
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
                                <h1 className="title">{ t().forgot_password }</h1>
                                {!emailSubmitted ? (
                                    <AuthForm buttonText={ t().forgot_password_button } onSubmit={ (email) => this.formSubmit(email) } isForgotPassword={ true }/>
                                ) : (
                                    <div className="content">
                                        <h1 className="title">{ t().forgot_password }</h1>
                                        <p>{ t().forgot_password_submitted_text }</p>
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
