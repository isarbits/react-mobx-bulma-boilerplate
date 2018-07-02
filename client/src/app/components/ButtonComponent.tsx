import * as React from 'react';

interface IProps {
    text: string;
    disabled?: boolean;
    type?: string;
    onClick: () => void;
}

export default class Button extends React.Component<IProps, any> {

    public render() {

        const { text, disabled, type } = this.props;

        return (
            <button
                className="button is-primary"
                onClick={ this.props.onClick }
                disabled={ disabled }
                type={ type }>

                { text }

            </button>
        );
    }
}
