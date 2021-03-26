import { SidebarLeft, SelectBlock, ServicesItem } from '../components';

function Home({ items }) {
    return (
        <section className="services">
            <div className="section-top services__section-top">
                <h1 className="title title_middle section-top__title">Women</h1>
            </div>
            <aside className="sidebar services__sidebar">
                <SidebarLeft
                    onClickItem={(name) => console.log(name)}
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
            <ul className="services-list services__services-list">
                {items.map((obj) => (
                    // <ServicesItem
                    //     key={obj.id}
                    //     name={obj.name}
                    //     imgSrcSetWebp={obj.imgSrcSetWebp}
                    //     imgSrcSetJpg={obj.imgSrcSetJpg}
                    //     imgSrc={obj.imgSrc}
                    // />

                    // <ServicesItem key={obj.id} obj={obj} />
                    <ServicesItem key={obj.id} {...obj} />
                ))}
            </ul>
        </section>
    );
}

export default Home;
