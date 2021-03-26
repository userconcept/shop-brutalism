import ButtonSquare from './ButtonSquare';
import { Link } from 'react-router-dom';

function Footer() {
    const buttonSquareClick = () => {
        console.log('buttonSquareClick');
    };

    return (
        <footer className="footer">
            <Link className="logo footer__logo" to="/">
                <svg className="icon icon_logo logo__icon" width="100" height="100">
                    <use xlinkHref="svg-symbols.svg#icon_logo"></use>
                </svg>
                <span className="logo__text">User</span>
                <span className="logo__text">Concept</span>
            </Link>
            <div className="footer-right footer__footer-right">
                <ButtonSquare
                    onClick={buttonSquareClick}
                    className="footer-right__button-square"
                    icon="#icon_basket">
                    <span className="button-square__price">100 $</span>
                    <span className="button-square__number">3</span>
                    <svg className="icon icon_basket button-square__icon" width="24" height="24">
                        <use xlinkHref="svg-symbols.svg#icon_basket"></use>
                    </svg>
                    Shopping cart
                </ButtonSquare>
                <a className="button-square footer-right__button-square" href="#something">
                    <svg className="icon icon_placemark button-square__icon" width="24" height="24">
                        <use xlinkHref="svg-symbols.svg#icon_placemark"></use>
                    </svg>
                    Contact
                </a>
                <a className="button-square footer-right__button-square" href="#something">
                    <svg className="icon icon_log_in button-square__icon" width="24" height="24">
                        <use xlinkHref="svg-symbols.svg#icon_log_in"></use>
                    </svg>
                    Log in
                </a>
            </div>
        </footer>
    );
}

export default Footer;
