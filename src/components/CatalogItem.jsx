import { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function CatalogItem({ id, name, images, price, colors, sizes }) {
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
        <li className="catalog-item catalog-list__catalog-item">
            <article className="catalog-item__inner">
                <Link className="catalog-item__link" to={`/shop-brutalism/product/${id}`}>
                    {name}
                </Link>
                <h3 className="catalog-item__title">{name}</h3>
                <div className="price catalog-item__price">{price} $</div>
                <div className="catalog-item__overlay">
                    <ul className="colors catalog-item__colors">
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
                    <ul className="sizes catalog-item__sizes">
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
                    <button className="add catalog-item__add">+ add</button>
                </div>
                <picture className="picture catalog-item__picture">
                    <source
                        type="image/webp"
                        srcSet={images.img_01.imgSrcSetWebp}
                        sizes="(min-width: 1200px) 22.125vw, (min-width: 600px) 44.1666666667vw, 90vw"
                    />
                    <img
                        className="picture__img"
                        srcSet={images.img_01.imgSrcSetJpg}
                        sizes="(min-width: 1200px) 22.125vw, (min-width: 600px) 44.1666666667vw, 90vw"
                        src={images.img_01.imgSrc}
                        alt={name}
                    />
                </picture>
            </article>
        </li>
    );
}

CatalogItem.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    images: PropTypes.object.isRequired,
    price: PropTypes.number.isRequired,
    colors: PropTypes.arrayOf(PropTypes.number).isRequired,
    sizes: PropTypes.arrayOf(PropTypes.string).isRequired,
};

CatalogItem.defaultProps = {
    id: 0,
    name: 'Catalog Item',
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
};

export default CatalogItem;
