/**
 * Created by Nick on 2017-09-23.
 */
import React, {Component} from 'react';
import TC from '../tc';
import './style.less';
export default class Content extends Component {
    constructor (){
        super ();
    }

    render (){
        return (
            <div className="daily-content">
                <TC/>
            </div>
        );
    }
}