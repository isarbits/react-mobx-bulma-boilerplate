import * as React from 'react';
import Section from 'app/components/SectionComponent';
import Container from 'app/components/ContainerComponent';

interface IProps {
    title?: string;
    text: string;
}

export default class HomeContainer extends React.Component<IProps, any> {

	public render() {

        const { title, text } = this.props;

        return(
            <Section>
                <Container>
                    <h1 className="title">{ title }</h1>
                    <p>{ text }</p>
                </Container>
            </Section>
        );
	}
}
