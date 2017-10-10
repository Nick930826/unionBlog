import React from 'react'
import { render } from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router'
import Read from '../container/Read'
import House from '../container/House'
import App from '../container/App'

class RouteMap extends React.Component {
    render() {
        return (
            <Router history={this.props.history}>
                <Route path='/' component={App}>
                    <IndexRoute component={Read}/>
                    <Route path='/house' component={House}/>
                </Route>
            </Router>
        )
    }
}
export default RouteMap
