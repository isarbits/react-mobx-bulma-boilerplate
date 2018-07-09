import * as React from 'react';
import { inject } from 'mobx-react';

import { t, todo } from 'app/utils/translate';
import Section from 'app/components/SectionComponent';
import Container from 'app/components/ContainerComponent';
import AuthForm from 'app/components/auth/AuthForm';

interface IState {
    title: string;
    text: string;
    submitted: boolean;
}

@inject('auth')
export default class PasswordResetContainer extends React.Component<any, IState> {

	constructor(props: any) {
		super(props);

		this.state = {
            title: t().password_reset_title,
            text: t().password_reset_text,
            submitted: false
		};
    }

    public componentDidMount() {
        const { match: { params } } = this.props;
        if (!params.hash) {
            this.changePasswordFailed();
        }
    }

	private formSubmit(email: string, password: string) {
		const { match: { params }, auth } = this.props;

		auth.changePassword(params.hash, password)
			.then(() => {
				this.setState({
					title: t().register_success_title,
					text: t().register_success_text,
					submitted: true
				});
			})
			.catch((err: any) => {
				console.error(err);
				this.changePasswordFailed();
			});
    }

	private changePasswordFailed() {
		this.setState({
			title: t().password_reset_failed_title,
			text: t().password_reset_failed_text,
			submitted: true
		});
	}

	public render() {

		const { submitted, title, text } = this.state;

		return(
			<Section>
				<Container>
					<div className="columns">
						<div className="column is-6 is-offset-3">
							<div className="box">
								<div className="content">
									<h1 className="title">{ title }</h1>
									<p>{ text }</p>
									{!submitted &&
                                        <AuthForm buttonText={ t().password_reset_title } onSubmit={ (email, password) => this.formSubmit(email, password) } isResetPassword={ true } />
									}
								</div>
							</div>
						</div>
					</div>
				</Container>
			</Section>
		);
	}
}
