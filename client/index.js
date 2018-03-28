/**
 * Created by Nick on 2017-09-23.
 */
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { hashHistory, browserHistory } from 'react-router';
import RouteMap from './route/routeMap.js';

import {$} from './lib';
$(() => {
    ReactDOM.render(
        <RouteMap/>,
        document.getElementById('container')
    );
});