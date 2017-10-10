/**
 * Created by Nick on 2017-09-23.
 */

'use strict';

import React, {Component} from 'react';
import Content from '../../components/content';
import './style.less';
export default class DailyRead extends Component {

    constructor (){
        super ();
    }

    componentWillMount () {
    }

    componentWillUnmount () {
    }

    render (){
        return (
            <div className="tech-daily-read">
                <Content/>
            </div>
        );
    }
}
