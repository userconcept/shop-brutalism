import { useState, useEffect } from 'react';
import { Routes, Route, useParams } from 'react-router-dom';
import axios from 'axios';

import { Catalog, Product, Cart, NotFound } from './pages';

import { Layout } from './components';

function ProductWrapper({ children }) {
    const { id } = useParams();

    return children(id);
}

function App() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        // fetch('/db.json')
        //     .then((promise) => promise.json())
        //     .then((json) => {
        //         setItems(json.items);
        //     });

        axios.get('/db.json').then(({ data }) => {
            setItems(data.items);
        });
    }, []);

    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Catalog items={items} />} />
                    <Route path="product/:id" element={
                        <ProductWrapper>
                            {(id) => <Product {...items[id]} />}
                        </ProductWrapper>
                    } />
                    <Route path="cart" element={<Cart />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
