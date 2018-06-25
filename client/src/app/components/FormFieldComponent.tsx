import * as React from 'react';

interface IProps {
    type?: string;
    label?: string;
    help?: string;
    placeholder?: string;
    value?: string;
    onChange: (e: any) => void;
}

export default class FormField extends React.Component<IProps, any> {

    public render() {

        const { value, type, label, help, placeholder } = this.props;

        return (
            <div className="field">
                {label &&
                    <label className="label">{ label }</label>
                }
                <div className="control">
                    <input value={ value } onChange={(e) => this.props.onChange(e) } type={ type ? type : 'text' } className="input" placeholder={ placeholder }/>
                </div>

                {help &&
                    <p className="help">{ help }</p>
                }
            </div>
        );
    }
}
