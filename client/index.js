import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import {$} from './lib';
import Header from './header';

$(() => {
    ReactDOM.render(
        <Header />,
        document.getElementById('container')
    );
});