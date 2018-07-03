import * as React from 'react';

interface IProps {
    title?: string;
    body: string;
    timeout?: number;
    color?: string;
    size?: string;
}

export default class Message extends React.Component<IProps, any> {

    public render() {

        const { title, body, timeout, color, size } = this.props;

        return(
            <div className={ `message ${ color } ${ size }` }>
                { title &&
                    <div className="message-header">
                        <p>{ title }</p>
                        <button className="delete"></button>
                    </div>
                }
                <div className="message-body">
                    { body }
                </div>
            </div>
        );
    }
}
