/**
 * Created by Nick on 2017-09-23.
 */
import React, {Component} from 'react';
import './style.less';
export default class Header extends Component {
    constructor (){
        super ();
    }

    render (){
        return (
            <div className="daily-read-header">
                <span className="logo-text">
                    尼克陈独家播报
                </span>
            </div>
        );
    }
}