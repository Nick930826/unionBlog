/**
 * Created by Nick on 2017-09-23.
 */

'use strict';

import React, {Component} from 'react';
import Header from '../../components/header';
import Content from '../../components/content';

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
                <Header/>
                <Content/>
            </div>
        );
    }
}
