import * as React from 'react';
import { Link } from 'react-router-dom';

import Image from 'app/components/ImageComponent';

interface IProps {
    isTransparent?: boolean;
    isFixed?: boolean;
}

interface IState {
    navbarActive: boolean;
}

export default class NavbarComponent extends React.Component<IProps, IState> {

    public constructor(props: any) {
        super(props);

        this.state = {
            navbarActive: false
        };
    }

    private triggerMobileNav() {
        this.setState({ navbarActive: !this.state.navbarActive });
    }

    public render() {

        const { isTransparent, isFixed } = this.props;
        const { navbarActive } = this.state;
        const isActive: string = navbarActive ? 'is-active' : '';
        let modifiers: string = '';

        if (isTransparent) { modifiers += ' is-transparent'; }
        if (isFixed) { modifiers += ' is-fixed'; }

        return (
            <nav className={`navbar ${ modifiers } ${ isActive }`}>
                <div className="navbar-brand">
                    <Link to="/" className="navbar-item">
                        <Image src="logo.png" />
                    </Link>

                    <a role="button" className={`navbar-burger ${ isActive }`} onClick={ () => this.triggerMobileNav() }>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>
            </nav>
        );
    }
}
