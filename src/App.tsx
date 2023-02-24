import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { createBrowserHistory, createHashHistory } from 'history';
import Home from '@/pages/Home';
import '@/theme/ionic.scss';

setupIonicReact();
const history = createHashHistory();

const App: React.FC = () => (
    <IonApp>
        <IonReactRouter history={history}>
            <IonRouterOutlet>
                <Route exact path="/home">
                    <Home />
                </Route>
                <Route exact path="/">
                    <Redirect to="/home" />
                </Route>
            </IonRouterOutlet>
        </IonReactRouter>
    </IonApp>
);

export default App;
