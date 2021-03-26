function Cart() {
    return (
        <section className="basket">
            <div className="section-top basket__section-top">
                <h1 className="title title_middle section-top__title">Shopping cart</h1>
                <button className="button section-top__button">Checkout</button>
            </div>
            <ul className="basket-list basket__basket-list">
                <li className="basket-item basket-list__basket-item">
                    <div className="basket-item__col">
                        <h2 className="title title_small basket-item__title">Catalog item 001</h2>
                        <a className="basket-item__link" href="#something">
                            <picture className="picture basket-item__picture">
                                <source
                                    type="image/webp"
                                    srcSet="/shop_react/img/content/catalog-item__img_001_01_640.webp 640w, /shop_react/img/content/catalog-item__img_001_01_1280.webp 1280w"
                                    sizes="(min-width: 1600px) 7.5vw, 7.5rem"
                                />
                                <img
                                    className="picture__img"
                                    srcSet="/shop_react/img/content/catalog-item__img_001_01_640.jpg 640w, /shop_react/img/content/catalog-item__img_001_01_1280.jpg 1280w"
                                    sizes="(min-width: 1600px) 7.5vw, 7.5rem"
                                    src="/shop_react/img/content/catalog-item__img_001_01_640.jpg"
                                    alt="Catalog item 001"
                                />
                            </picture>
                        </a>
                        <div className="basket-item__info">
                            <div className="color color_black basket-item__color">Black</div>
                            <div className="size size_s basket-item__size">s</div>
                        </div>
                    </div>
                    <div className="counter basket-item__counter">
                        <button className="button-counter button-counter_minus counter__button-counter">
                            <span className="button-counter__symbol">Minus</span>
                        </button>
                        <input
                            className="input counter__input"
                            type="text"
                            id="counter-input-01"
                            name="counter-input-01"
                            placeholder="0"
                        />
                        <button className="button-counter button-counter_plus counter__button-counter">
                            <span className="button-counter__symbol">Plus</span>
                        </button>
                    </div>
                    <div className="price basket-item__price">100$</div>
                    <button className="button-close basket-item__button-close">
                        <span className="button-close__symbol">Remove</span>
                    </button>
                </li>
                <li className="basket-item basket-list__basket-item">
                    <div className="basket-item__col">
                        <h2 className="title title_small basket-item__title">Catalog item 002</h2>
                        <a className="basket-item__link" href="#something">
                            <picture className="picture basket-item__picture">
                                <source
                                    type="image/webp"
                                    srcSet="/shop_react/img/content/catalog-item__img_002_01_640.webp 640w, /shop_react/img/content/catalog-item__img_002_01_1280.webp 1280w"
                                    sizes="(min-width: 1600px) 7.5vw, 7.5rem"
                                />
                                <img
                                    className="picture__img"
                                    srcSet="/shop_react/img/content/catalog-item__img_002_01_640.jpg 640w, /shop_react/img/content/catalog-item__img_002_01_1280.jpg 1280w"
                                    sizes="(min-width: 1600px) 7.5vw, 7.5rem"
                                    src="/shop_react/img/content/catalog-item__img_002_01_640.jpg"
                                    alt="Catalog item 002"
                                />
                            </picture>
                        </a>
                        <div className="basket-item__info">
                            <div className="color color_blue basket-item__color">Blue</div>
                            <div className="size size_s basket-item__size">s</div>
                        </div>
                    </div>
                    <div className="counter basket-item__counter">
                        <button className="button-counter button-counter_minus counter__button-counter">
                            <span className="button-counter__symbol">Minus</span>
                        </button>
                        <input
                            className="input counter__input"
                            type="text"
                            id="counter-input-02"
                            name="counter-input-02"
                            placeholder="0"
                        />
                        <button className="button-counter button-counter_plus counter__button-counter">
                            <span className="button-counter__symbol">Plus</span>
                        </button>
                    </div>
                    <div className="price basket-item__price">100$</div>
                    <button className="button-close basket-item__button-close">
                        <span className="button-close__symbol">Remove</span>
                    </button>
                </li>
                <li className="basket-item basket-list__basket-item">
                    <div className="basket-item__col">
                        <h2 className="title title_small basket-item__title">Catalog item 003</h2>
                        <a className="basket-item__link" href="#something">
                            <picture className="picture basket-item__picture">
                                <source
                                    type="image/webp"
                                    srcSet="/shop_react/img/content/catalog-item__img_003_01_640.webp 640w, /shop_react/img/content/catalog-item__img_003_01_1280.webp 1280w"
                                    sizes="(min-width: 1600px) 7.5vw, 7.5rem"
                                />
                                <img
                                    className="picture__img"
                                    srcSet="/shop_react/img/content/catalog-item__img_003_01_640.jpg 640w, /shop_react/img/content/catalog-item__img_003_01_1280.jpg 1280w"
                                    sizes="(min-width: 1600px) 7.5vw, 7.5rem"
                                    src="/shop_react/img/content/catalog-item__img_003_01_640.jpg"
                                    alt="Catalog item 003"
                                />
                            </picture>
                        </a>
                        <div className="basket-item__info">
                            <div className="color color_green basket-item__color">Green</div>
                            <div className="size size_s basket-item__size">s</div>
                        </div>
                    </div>
                    <div className="counter basket-item__counter">
                        <button className="button-counter button-counter_minus counter__button-counter">
                            <span className="button-counter__symbol">Minus</span>
                        </button>
                        <input
                            className="input counter__input"
                            type="text"
                            id="counter-input-03"
                            name="counter-input-03"
                            placeholder="0"
                        />
                        <button className="button-counter button-counter_plus counter__button-counter">
                            <span className="button-counter__symbol">Plus</span>
                        </button>
                    </div>
                    <div className="price basket-item__price">100$</div>
                    <button className="button-close basket-item__button-close">
                        <span className="button-close__symbol">Remove</span>
                    </button>
                </li>
            </ul>
            <button className="button basket__button">Checkout</button>
        </section>
    );
}

export default Cart;
