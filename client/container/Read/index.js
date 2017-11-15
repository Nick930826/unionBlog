/**
 * Created by Nick on 2017-09-23.
 */

'use strict';

import React, {Component} from 'react';
import { Link } from 'react-router';
import cx from 'classnames';
import TC from './TC';
import './style.less';
export default class DailyRead extends Component {

    constructor (props){
        super (props);
        this.state = {
            _index: 0,
        };
    }

    componentWillMount () {
    }

    componentWillUnmount () {
    }
    handleSelect(index) {
        console.log('index', index);
        this.setState({
            _index: index
        });
    }
    render (){
        const { _index } = this.state;
        const menu = [
            {
                name: 'TC',
                title: '推酷',
                link: '/read/tc'
            },
            {
                name: 'toutiao',
                title: '开发者头条',
                link: '/read/toutiao'
            },
            {
                name: 'bole',
                title: '伯乐',
                link: '/read/bole'
            },
            {
                name: 'seg',
                title: 'segmentfault',
                link: '/read/seg'
            }
        ];
        return (
            <div className="tech-daily-read">
                <ul className="read-menu">
                    {
                        menu.map((item, index) => {
                            return (
                                <li onClick={this.handleSelect.bind(this, index)} key={index} className={cx({
                                    'selected': _index == index
                                })}>
                                    <Link to={item.link}>{item.title}</Link>
                                </li>
                            );
                        })
                    }
                </ul>
                <div className="daily-content">
                    {this.props.children}
                </div>
            </div>
        );
    }
}
