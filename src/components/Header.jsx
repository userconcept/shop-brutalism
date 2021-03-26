import ButtonSquare from './ButtonSquare';
import { Link } from 'react-router-dom';

function Header() {
    const buttonSquareClick = () => {
        console.log('buttonSquareClick');
    };

    return (
        <header className="header">
            <Link className="logo header__logo" to="/shop_react">
                <svg className="icon icon_logo logo__icon" width="100" height="100">
                    <use xlinkHref="svg-symbols.svg#icon_logo"></use>
                </svg>
                <span className="logo__text">User</span>
                <span className="logo__text">Concept</span>
            </Link>
            <nav className="nav header__nav">
                <ul className="nav-list nav__nav-list">
                    <li className="nav-list__item">
                        <a className="nav-list__link nav-list__link_active" href="#something">
                            Women
                        </a>
                    </li>
                    <li className="nav-list__item">
                        <a className="nav-list__link" href="#something">
                            Men
                        </a>
                    </li>
                    <li className="nav-list__item">
                        <a className="nav-list__link" href="#something">
                            Kids
                        </a>
                    </li>
                </ul>
            </nav>
            <div className="header-right header__header-right">
                {/* <ButtonSquare onClick={buttonSquareClick} headerRight icon="#icon_basket" />
                <ButtonSquare onClick={buttonSquareClick} headerRight icon="#icon_placemark" />
                <ButtonSquare onClick={buttonSquareClick} headerRight icon="#icon_log_in" /> */}
                {/* <a className="button-square header-right__button-square" href="basket.html">
                    <span className="button-square__price">100 $</span>
                    <span className="button-square__number">3</span>
                    <svg className="icon icon_basket button-square__icon" width="24" height="24">
                        <use xlinkHref="svg-symbols.svg#icon_basket"></use>
                    </svg>
                    Shopping cart
                </a> */}
                <ButtonSquare
                    onClick={buttonSquareClick}
                    className="header-right__button-square"
                    icon="#icon_basket">
                    <span className="button-square__price">100 $</span>
                    <span className="button-square__number">3</span>
                    <svg className="icon icon_basket button-square__icon" width="24" height="24">
                        <use xlinkHref="svg-symbols.svg#icon_basket"></use>
                    </svg>
                    Shopping cart
                </ButtonSquare>
                <a className="button-square header-right__button-square" href="#something">
                    <svg className="icon icon_placemark button-square__icon" width="24" height="24">
                        <use xlinkHref="svg-symbols.svg#icon_placemark"></use>
                    </svg>
                    Contact
                </a>
                <a className="button-square header-right__button-square" href="#something">
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
