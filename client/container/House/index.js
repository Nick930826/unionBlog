/**
 * Created by Nick on 2017-10-10.
 */

'use strict';

import React, {Component} from 'react';
import './style.less';
export default class House extends Component {

    constructor (){
        super ();
    }

    componentWillMount () {
    }

    componentWillUnmount () {
    }

    render (){
        return (
            <div className="house">
                <p>房子</p>
            </div>
        );
    }
}
