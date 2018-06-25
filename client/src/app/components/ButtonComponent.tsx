import * as React from 'react';

interface IProps {
    text: string;
    onClick: () => void;
}

export default class Button extends React.Component<IProps, any> {

    public render() {

        const { text } = this.props;

        return (
            <button className="button is-primary" onClick={ this.props.onClick }>{ text }</button>
        );
    }
}
