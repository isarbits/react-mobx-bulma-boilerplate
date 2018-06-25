import * as React from 'react';

interface IProps {
    src: string;
    alt?: string;
}

export default class Image extends React.Component<IProps, any> {

    public render() {

        const { src, alt } = this.props;

        return (
            <img src={require(`assets/images/${ src }`)} alt={ alt }/>
        );
    }
}
