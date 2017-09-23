/**
 * Created by Nick on 2017-09-23.
 */
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import {$} from './lib';
import DailyRead from './container/daliy-read';

$(() => {
    ReactDOM.render(
        <DailyRead />,
        document.getElementById('container')
    );
});