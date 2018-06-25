import * as React from 'react';
import * as classnames from 'classnames';

interface IProps {
    modifier?: string;
}

export default class Container extends React.Component<IProps, any> {

    public render() {

        const { modifier, children } = this.props;

        const classes = classnames([
            'container',
            {'is-fullwidth': modifier === 'fullwidth' || modifier === 'is-fullwidth'},
            {'is-fullhd': modifier === 'fullhd' || modifier === 'is-fullhd'},
            {'is-fluid': modifier === 'fluid' || modifier === 'is-fluid'},
        ]);

        return (
            <div className={ classes }>
                { children }
            </div>
        );
    }
}
