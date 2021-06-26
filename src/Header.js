import React from 'react';
import './Header.css';
import logo from './img/logo-white.png';
import userIcon from './img/icon-user.png';
import arrowIcon from './img/icon-arrow-down.png';


class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isActive: false
        }
        this.wasMounted = false;
        this.handleHamburgerClick = this.handleHamburgerClick.bind(this);
    }

    handleHamburgerClick() {
        this.setState({ isActive: !this.state.isActive });
    }

    componentDidMount() {
        this.wasMounted = true;
    }

    render() {
        let listMobile = null;

        if (this.wasMounted) {
            listMobile = (
                <ul className={'header__list--mobile text--emphasis ' +
                    (this.state.isActive ? 'expand-animation' : 'contract-animation')}>
                    <li className='header__item--mobile'>Dashboard</li>
                </ul>
            );
        }

        return (
            <div>
                <header className='header lateral-padding'>
                    <div>
                        <img className='header__logo' src={logo} alt='Logo' />
                        <span className='header__title text--emphasis'>My Dots</span>
                    </div>
                    <ul className='header__list text--emphasis'>
                        <li className='header__item'>Dashboard</li>
                    </ul>
                    <div>
                        <div className='header__user'>
                            <img className='user__picture' src={userIcon} alt='User'></img>
                            <img className='user__arrow' src={arrowIcon} alt='Arrow'></img>
                            <p className='user__name text--normal'>User:<br />Mateo Sánchez</p>
                        </div>
                        <div className={'header__hamburger ' +
                            (this.state.isActive ? 'hamburger--active' : '')}
                            onClick={this.handleHamburgerClick}>
                            <div className='hamburger__slice slice--top' />
                            <div className='hamburger__slice slice--middle' />
                            <div className='hamburger__slice slice--bottom' />
                        </div>
                    </div>
                </header>
                {listMobile}
            </div>
        );
    }
}

export default Header;