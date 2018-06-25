import * as React from 'react';
import * as classnames from 'classnames';
import Container from 'app/components/ContainerComponent';

interface IProps {
    size?: string;
}

export default class Section extends React.Component<IProps, any> {

    public render() {

        const { size, children } = this.props;

        const classes = classnames([
            'section',
            { 'is-medium' : size === 'is-medium' || size === 'medium' },
            { 'is-large' : size === 'is-large' || size === 'large' }
        ]);

        return (
            <section className={ classes }>
                <Container>
                    { children }
                </Container>
            </section>
        );
    }
}
