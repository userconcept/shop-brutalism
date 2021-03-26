import React from 'react';

function SidebarLeft({ items, onClickItem }) {
    const [activeItem, setActiveItem] = React.useState(null);

    const onSelectItem = (index) => {
        setActiveItem(index);
    };

    return (
        <div className="sidebar-left sidebar__sidebar-left">
            <h2 className="title title_small sidebar-left__title">Categories</h2>
            <button
                className={`button-tag sidebar-left__button-tag ${
                    activeItem === null ? 'button-tag_active' : ''
                }`}
                onClick={() => onSelectItem(null)}>
                All
            </button>
            {items &&
                items.map((name, index) => (
                    <button
                        className={`button-tag sidebar-left__button-tag ${
                            activeItem === index ? 'button-tag_active' : ''
                        }`}
                        onClick={() => onSelectItem(index)}
                        key={`${name}_${index}`}>
                        {name}
                    </button>
                ))}
        </div>
    );
}

export default SidebarLeft;
