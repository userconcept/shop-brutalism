import React from 'react';
import axios from 'axios';

import { Header, Footer } from './components';
import { Home, Service, Cart } from './pages';
import { Route } from 'react-router-dom';

function App() {
    const [services, setServices] = React.useState([]);

    React.useEffect(() => {
        // fetch('https://userconcept.github.io/shop_react/db.json')
        //     .then((resp) => resp.json())
        //     .then((json) => {
        //         setServices(json.services);
        //     });

        axios.get('https://userconcept.github.io/shop_react/db.json').then(({ data }) => {
            setServices(data.services);
        });
    }, []);

    // console.log(services);

    return (
        <>
            <div className="page-wrapper">
                <Header />
                <main className="main">
                    <Route path="/" render={() => <Home items={services} />} exact />
                    <Route path="/cart" component={Cart} exact />
                    <Route
                        path="/service/:id"
                        render={(params) => <Service {...services[params.match.params.id]} />}
                        exact
                    />
                    {/* <Route path="/service/:id" render={() => <Service items={services} />} exact /> */}
                </main>
                <div className="empty"></div>
            </div>
            <Footer />
        </>
    );
}

export default App;
