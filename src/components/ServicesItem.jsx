import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function ServicesItem({ id, name, images, price, colors, sizes }) {
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
        <li className="services-item services-list__services-item">
            <article className="services-item__inner">
                <Link className="services-item__link" to={`/service/${id}`}>
                    {name}
                </Link>
                <h3 className="services-item__title">{name}</h3>
                <div className="price services-item__price">{price} $</div>
                <div className="services-item__overlay">
                    <ul className="colors services-item__colors">
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
                    <ul className="sizes services-item__sizes">
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
                    <button className="add services-item__add">+ add</button>
                </div>
                <picture className="picture services-item__picture">
                    <source
                        type="image/webp"
                        srcSet={images.img_01.imgSrcSetWebp}
                        sizes="(min-width: 1200px) 21.75vw, (min-width: 600px) 44.1666666667vw, 90vw"
                    />
                    <img
                        className="picture__img"
                        srcSet={images.img_01.imgSrcSetJpg}
                        sizes="(min-width: 1200px) 21.75vw, (min-width: 600px) 44.1666666667vw, 90vw"
                        src={images.img_01.imgSrc}
                        alt={name}
                    />
                </picture>
            </article>
        </li>
    );
}

ServicesItem.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    images: PropTypes.object.isRequired,
    price: PropTypes.number.isRequired,
    colors: PropTypes.arrayOf(PropTypes.number).isRequired,
    sizes: PropTypes.arrayOf(PropTypes.string).isRequired,
};

ServicesItem.defaultProps = {
    id: 0,
    name: 'Services Item',
    price: 0,
    colors: [],
    sizes: [],
};

export default ServicesItem;
