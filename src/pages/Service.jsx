import React from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function Service({ name, images, price, colors, sizes, about }) {
    const { id } = useParams();

    console.log(id);

    const colorsNames = ['black', 'white', 'blue', 'green', 'red', 'yellow'];
    const sizesNames = ['xs', 's', 'm', 'l', 'xl'];

    const [activeColor, setActiveColor] = React.useState(colors[0]);
    const [activeSize, setActiveSize] = React.useState(sizes[0]);

    const onSelectColor = (index) => {
        setActiveColor(index);
    };

    const onSelectSize = (index) => {
        setActiveSize(index);
    };

    return (
        <section className="service">
            <div className="section-top service__section-top">
                <h1 className="title title_middle section-top__title">{name}</h1>
                <button className="button section-top__button">Checkout</button>
            </div>
            <div className="container service__container">
                <div className="service-left service__service-left">
                    <ul className="picture-preview service-left__picture-preview">
                        <li className="picture-preview__item">
                            <picture className="picture picture-preview__picture">
                                <source
                                    type="image/webp"
                                    srcSet={images.img_01.imgSrcSetWebp}
                                    sizes="(min-width: 1200px) 13.5833333333vw, (min-width: 600px) 27.5vw, 23.6111111111vw"
                                />
                                <img
                                    className="picture__img"
                                    srcSet={images.img_01.imgSrcSetJpg}
                                    sizes="(min-width: 1200px) 13.5833333333vw, (min-width: 600px) 27.5vw, 23.6111111111vw"
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
                                    sizes="(min-width: 1200px) 13.5833333333vw, (min-width: 600px) 27.5vw, 23.6111111111vw"
                                />
                                <img
                                    className="picture__img"
                                    srcSet={images.img_02.imgSrcSetJpg}
                                    sizes="(min-width: 1200px) 13.5833333333vw, (min-width: 600px) 27.5vw, 23.6111111111vw"
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
                                    sizes="(min-width: 1200px) 13.5833333333vw, (min-width: 600px) 27.5vw, 23.6111111111vw"
                                />
                                <img
                                    className="picture__img"
                                    srcSet={images.img_03.imgSrcSetJpg}
                                    sizes="(min-width: 1200px) 13.5833333333vw, (min-width: 600px) 27.5vw, 23.6111111111vw"
                                    src={images.img_03.imgSrc}
                                    alt={name}
                                />
                            </picture>
                        </li>
                    </ul>
                    <div className="picture-large service-left__picture-large">
                        <picture className="picture picture-preview__picture">
                            <source
                                type="image/webp"
                                srcSet={images.img_01.imgSrcSetWebp}
                                sizes="(min-width: 1200px) 46.3333333333vw, (min-width: 600px) 94vw, 90vw"
                            />
                            <img
                                className="picture__img"
                                srcSet={images.img_01.imgSrcSetJpg}
                                sizes="(min-width: 1200px) 46.3333333333vw, (min-width: 600px) 94vw, 90vw"
                                src={images.img_01.imgSrc}
                                alt={name}
                            />
                        </picture>
                    </div>
                </div>
                <div className="service-right service__service-right">
                    <p className="text service-right__text">{about}</p>
                    <ul className="colors service-right__colors">
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
                    <ul className="sizes service-right__sizes">
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
                    <div className="price service-right__price">{price} $</div>
                    <button className="add service-right__add">+ add</button>
                </div>
            </div>
        </section>
    );
}

Service.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    images: PropTypes.object.isRequired,
    price: PropTypes.number.isRequired,
    colors: PropTypes.arrayOf(PropTypes.number).isRequired,
    sizes: PropTypes.arrayOf(PropTypes.string).isRequired,
};

Service.defaultProps = {
    id: 0,
    name: 'Services Item',
    images: {},
    price: 0,
    colors: [],
    sizes: [],
};

export default Service;
