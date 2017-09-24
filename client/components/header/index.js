/**
 * Created by Nick on 2017-09-23.
 */
import React, {Component} from 'react';
import HeaderList from '../header-list';
import './style.less';
export default class Header extends Component {
    constructor (){
        super ();
    }

    render (){
        return (
            <div className="daily-read-header">
                <HeaderList/>
            </div>
        );
    }
}