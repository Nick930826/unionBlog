/**
 * Created by Nick on 2017-09-23.
 */
import React, {Component} from 'react';
import { Link } from 'react-router';
import './style.less';
export default class HeaderList extends Component {
    constructor (props){
        super(props);
        this.catesClick = this.catesClick.bind(this);
    }

    catesClick(platform) {
        console.log('platform', platform);
    }

    render (){
        return (
            <div className="list">
                <ul>
                    <li><Link to={'/'}>学习</Link></li>
                    <li><Link to={'/house'}>房产</Link></li>
                </ul>
            </div>
        );
    }
}