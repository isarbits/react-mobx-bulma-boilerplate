import * as React from 'react';

interface IProps {
    type?: string;
    label?: string;
    help?: string;
    placeholder?: string;
    value?: string;
    onChange: (e: any) => void;
}

interface IState {
    inputValue: string;
}

export default class FormField extends React.Component<IProps, IState> {

    constructor(props: any) {
        super(props);

        this.state = {
            inputValue: undefined
        };
    }

    public render() {

        const { value, type, label, help, placeholder } = this.props;
        const { inputValue } = this.state;

        return (
            <div className="field">
                {label &&
                    <label className="label">{ label }</label>
                }
                <div className="control">
                    <input value={ inputValue } onChange={(e) => this.props.onChange(e) } type={ type ? type : 'text' } className="input" placeholder={ placeholder }/>
                </div>

                {help &&
                    <p className="help">{ help }</p>
                }
            </div>
        );
    }
}
