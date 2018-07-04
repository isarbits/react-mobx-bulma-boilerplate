import * as React from 'react';

import AuthStore from 'app/stores/AuthStore';

import { t, todo } from 'app/utils/translate';
import Section from 'app/components/SectionComponent';
import Container from 'app/components/ContainerComponent';
import Button from 'app/components/ButtonComponent';
import { inject } from 'mobx-react';
import { Link } from 'react-router-dom';

interface IState {
	title: string;
	text: string;
	showLoginButton: boolean;
}

@inject('auth')
export default class RegisterConfirmContainer extends React.Component<any, IState> {

	public constructor(props: any) {
		super(props);

		this.state = {
			title: t().register_confirming_title,
			text: t().register_confirming_text,
			showLoginButton: false
		};
	}

	public componentDidMount() {
		this.confirmEmail();
	}

	private confirmEmail() {
		const { match: { params }, auth } = this.props;
		auth.verifyEmail(params.hash)
			.then(() => {
				this.setState({
					title: t().register_success_title,
					text: t().register_success_text,
					showLoginButton: true
				});
			})
			.catch((err: any) => {
				console.error(err);
				this.confirmFailed();
		});
	}

	private confirmFailed() {
		this.setState({
			title: t().register_failed_title,
			text: t().register_failed_text
		});
	}

	public render() {

		const { match: { params } } = this.props;
		const { title, text, showLoginButton } = this.state;

		return(
			<Section>
				<Container>
					<div className="columns">
						<div className="column is-6 is-offset-3">
							<div className="box">
								<div className="content">
									<h1 className="title">{ title }</h1>
									<p>{ text }</p>
									{ showLoginButton &&
										<Link className="button is-primary" to="/login">{ t().login }</Link>
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
