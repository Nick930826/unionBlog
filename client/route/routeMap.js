import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Read from '../container/Read';
import House from '../container/House';
import App from '../container/App';
import TC from '../container/Read/TC';
import TouTiao from '../container/Read/TouTiao';
import BoLe from '../container/Read/BoLe';
import Seg from '../container/Read/Seg';
const routes = {
    path: '/',
    component: App,
    indexRoute: { onEnter: (nextState, replace) => replace('/read/tc') },
    childRoutes: [
        {
            path: 'read',
            component: Read,
            indexRoute: { onEnter: (nextState, replace) => replace('/read/tc') },
            childRoutes: [
                {
                    path: 'tc',
                    component: TC
                },
                {
                    path: 'toutiao',
                    component: TouTiao
                },
                {
                    path: 'bole',
                    component: BoLe
                },
                {
                    path: 'seg',
                    component: Seg
                }
            ]
        },
        {
            path: 'house',
            component: House
        }
    ]
};
class RouteMap extends React.Component {
    render() {
        return (
            <Router routes={routes} history={browserHistory}></Router>
        )
    }
}
export default RouteMap
