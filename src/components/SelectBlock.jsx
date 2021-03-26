import React from 'react';

function SelectBlock({ items }) {
    const [activeSelect, setActiveSelect] = React.useState(false);
    const [activeItem, setActiveItem] = React.useState(0);
    const selectRef = React.useRef();
    const activeName = items[activeItem];

    const toggleActiveSelect = () => {
        setActiveSelect(!activeSelect);
    };

    const clickOutside = (evt) => {
        if (!evt.path.includes(selectRef.current)) {
            setActiveSelect(false);
        }
    };

    const onSelectItem = (index) => {
        setActiveItem(index);
        setActiveSelect(false);
    };

    React.useEffect(() => {
        document.body.addEventListener('click', clickOutside);
    }, []);

    return (
        <div className="select-block sidebar-right__select-block" ref={selectRef}>
            <h2 className="select-block__text">Sort by</h2>
            <select className="select-block__hidden" id="select-sort" name="select-sort">
                <option value="select-sort-popular">Popular</option>
                <option value="select-sort-price">Price</option>
                <option value="select-sort-name">Name</option>
            </select>
            <div className="select select-block__select">
                <div className="select__name" onClick={toggleActiveSelect}>
                    {activeName}
                </div>
                {activeSelect && (
                    <ul className="select__list">
                        {items &&
                            items.map((name, index) => (
                                <li
                                    className={`select__item ${
                                        activeItem === index ? 'select__item_active' : ''
                                    }`}
                                    onClick={() => onSelectItem(index)}
                                    key={`${name}_${index}`}>
                                    {name}
                                </li>
                            ))}
                    </ul>
                )}
            </div>
        </div>
    );
}

export default SelectBlock;
