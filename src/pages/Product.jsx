import { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function Product({ name, images, price, colors, sizes, about }) {
    const colorsNames = ['black', 'white', 'blue', 'green', 'red', 'yellow'];
    const sizesNames = ['xs', 's', 'm', 'l', 'xl'];

    const [activeColor, setActiveColor] = useState(colors[0]);
    const [activeSize, setActiveSize] = useState(sizes[0]);

    const onSelectColor = (index) => {
        setActiveColor(index);
    };

    const onSelectSize = (index) => {
        setActiveSize(index);
    };

    return (
        <section className="product">
            <div className="section-top product__section-top">
                <h1 className="title title_middle section-top__title">{name}</h1>
                <button className="button section-top__button">Checkout</button>
            </div>
            <div className="container product__container">
                <div className="product-left product__product-left">
                    <ul className="picture-preview product-left__picture-preview">
                        <li className="picture-preview__item">
                            <picture className="picture picture-preview__picture">
                                <source
                                    type="image/webp"
                                    srcSet={images.img_01.imgSrcSetWebp}
                                    sizes="(min-width: 1200px) 13.7633333333vw, 30.2777777778vw"
                                />
                                <img
                                    className="picture__img"
                                    srcSet={images.img_01.imgSrcSetJpg}
                                    sizes="(min-width: 1200px) 13.7633333333vw, 30.2777777778vw"
                                    src={images.img_01.imgSrc}
                                    alt={name}
                                />
                            </picture>
                        </li>
                        <li className="picture-preview__item">
                            <picture className="picture picture-preview__picture">
                                <source
                                    type="image/webp"
                                    srcSet={images.img_02.imgSrcSetWebp}
                                    sizes="(min-width: 1200px) 13.7633333333vw, 30.2777777778vw"
                                />
                                <img
                                    className="picture__img"
                                    srcSet={images.img_02.imgSrcSetJpg}
                                    sizes="(min-width: 1200px) 13.7633333333vw, 30.2777777778vw"
                                    src={images.img_02.imgSrc}
                                    alt={name}
                                />
                            </picture>
                        </li>
                        <li className="picture-preview__item">
                            <picture className="picture picture-preview__picture">
                                <source
                                    type="image/webp"
                                    srcSet={images.img_03.imgSrcSetWebp}
                                    sizes="(min-width: 1200px) 13.7633333333vw, 30.2777777778vw"
                                />
                                <img
                                    className="picture__img"
                                    srcSet={images.img_03.imgSrcSetJpg}
                                    sizes="(min-width: 1200px) 13.7633333333vw, 30.2777777778vw"
                                    src={images.img_03.imgSrc}
                                    alt={name}
                                />
                            </picture>
                        </li>
                    </ul>
                    <div className="picture-large product-left__picture-large">
                        <picture className="picture picture-large__picture">
                            <source
                                type="image/webp"
                                srcSet={images.img_01.imgSrcSetWebp}
                                sizes="(min-width: 1200px) 47.1241666667vw, 90vw"
                            />
                            <img
                                className="picture__img"
                                srcSet={images.img_01.imgSrcSetJpg}
                                sizes="(min-width: 1200px) 47.1241666667vw, 90vw"
                                src={images.img_01.imgSrc}
                                alt={name}
                            />
                        </picture>
                    </div>
                </div>
                <div className="product-right product__product-right">
                    <p className="text product-right__text">{about}</p>
                    <ul className="colors product-right__colors">
                        {colorsNames.map((color, index) => (
                            <li
                                className={classNames(
                                    'color',
                                    `color_${color}`,
                                    {
                                        color_active: activeColor === index,
                                        color_disabled: !colors.includes(index),
                                    },
                                    'colors__color',
                                )}
                                onClick={() => onSelectColor(index)}
                                key={color}>
                                {color}
                            </li>
                        ))}
                    </ul>
                    <ul className="sizes product-right__sizes">
                        {sizesNames.map((size, index) => (
                            <li
                                className={classNames(
                                    'size',
                                    `size_${size}`,
                                    {
                                        size_active: activeSize === index,
                                        size_disabled: !sizes.includes(size),
                                    },
                                    'sizes__size',
                                )}
                                onClick={() => onSelectSize(index)}
                                key={size}>
                                {size}
                            </li>
                        ))}
                    </ul>
                    <div className="price product-right__price">{price} $</div>
                    <button className="add product-right__add">+ add</button>
                </div>
            </div>
        </section>
    );
}

Product.propTypes = {
    name: PropTypes.string.isRequired,
    images: PropTypes.object.isRequired,
    price: PropTypes.number.isRequired,
    colors: PropTypes.arrayOf(PropTypes.number).isRequired,
    sizes: PropTypes.arrayOf(PropTypes.string).isRequired,
    about: PropTypes.string.isRequired,
};

Product.defaultProps = {
    name: 'Product Item',
    images: {
        img_01: {
            imgSrcSetWebp: '',
            imgSrcSetJpg: '',
            imgSrc: '',
        },
        img_02: {
            imgSrcSetWebp: '',
            imgSrcSetJpg: '',
            imgSrc: '',
        },
        img_03: {
            imgSrcSetWebp: '',
            imgSrcSetJpg: '',
            imgSrc: '',
        },
    },
    price: 0,
    colors: [],
    sizes: [],
    about: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
};

export default Product;
