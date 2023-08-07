import { Link } from 'react-router-dom';

import { ButtonSquare } from './';

function Header() {
    const handleButtonSquareClick = () => {
        console.log('handleButtonSquareClick');
    };

    return (
        <header className="header">
            <Link className="logo header__logo" to="/">
                <svg className="icon icon_logo logo__icon" width="100" height="100">
                    <use xlinkHref="svg-symbols.svg#icon_logo"></use>
                </svg>
                <span className="logo__text">User</span>
                <span className="logo__text">Concept</span>
            </Link>
            <nav className="nav header__nav">
                <ul className="nav-list nav__nav-list">
                    <li className="nav-list__item">
                        <a className="nav-list__link nav-list__link_active" href="#">
                            Women
                        </a>
                    </li>
                    <li className="nav-list__item">
                        <a className="nav-list__link" href="#">
                            Men
                        </a>
                    </li>
                    <li className="nav-list__item">
                        <a className="nav-list__link" href="#">
                            Kids
                        </a>
                    </li>
                </ul>
            </nav>
            <div className="header-right header__header-right">
                <ButtonSquare
                    onClick={handleButtonSquareClick}
                    className="header-right__button-square"
                    icon="#icon_cart">
                    <span className="button-square__price">100 $</span>
                    <span className="button-square__number">3</span>
                    <svg className="icon icon_cart button-square__icon" width="24" height="24">
                        <use xlinkHref="svg-symbols.svg#icon_cart"></use>
                    </svg>
                    Shopping cart
                </ButtonSquare>
                <a className="button-square header-right__button-square" href="#">
                    <svg className="icon icon_placemark button-square__icon" width="24" height="24">
                        <use xlinkHref="svg-symbols.svg#icon_placemark"></use>
                    </svg>
                    Contact
                </a>
                <a className="button-square header-right__button-square" href="#">
                    <svg className="icon icon_log_in button-square__icon" width="24" height="24">
                        <use xlinkHref="svg-symbols.svg#icon_log_in"></use>
                    </svg>
                    Log in
                </a>
            </div>
            <button className="button-nav header__button-nav">
                <span className="button-nav__hamburger">Navigation open</span>
            </button>
        </header>
    );
}

export default Header;
