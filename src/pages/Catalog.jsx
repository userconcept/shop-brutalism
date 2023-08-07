import { SidebarLeft, SelectBlock, CatalogItem } from '../components';

function Catalog({ items }) {
    return (
        <section className="catalog">
            <div className="section-top catalog__section-top">
                <h1 className="title title_middle section-top__title">Women</h1>
            </div>
            <aside className="sidebar catalog__sidebar">
                <SidebarLeft
                    items={[
                        'Short sleeve',
                        'Long sleeve',
                        'Sweatshirts',
                        'Jackets',
                        'Pants',
                        'Hats',
                        'Bags',
                    ]}
                />
                <div className="sidebar-right sidebar__sidebar-right">
                    <SelectBlock items={['Popular', 'Price', 'Name']} />
                </div>
            </aside>
            <ul className="catalog-list catalog__catalog-list">
                {items.map((obj) => (
                    // <CatalogItem
                    //     key={obj.id}
                    //     name={obj.name}
                    //     imgSrcSetWebp={obj.imgSrcSetWebp}
                    //     imgSrcSetJpg={obj.imgSrcSetJpg}
                    //     imgSrc={obj.imgSrc}
                    // />

                    // <CatalogItem key={obj.id} obj={obj} />

                    <CatalogItem key={obj.id} {...obj} />
                ))}
            </ul>
        </section>
    );
}

export default Catalog;
