import React, { PropTypes } from 'react'
import { render } from 'react-dom';
import Header from '../components/header';
class App extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (
            <div>
                <Header />
                {this.props.children}
            </div>
        )
    }
}
App.propTypes = {
    children: PropTypes.any
};
export default App
