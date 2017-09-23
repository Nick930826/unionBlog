/**
 * Created by Nick on 2017-09-23.
 */

'use strict';

import React, {Component} from 'react';
import axios from 'axios';
import Header from '../../components/header';
import Content from '../../components/content';

export default class DailyRead extends Component {

    constructor (){
        super ();
    }

    componentWillMount () {
        // fetch('/tc').then(res => {
        //     console.log('推酷', res.body);
        // });
        axios.get('/tc').then(res => {
            console.log('res', res);
        })
        
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
