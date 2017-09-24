/**
 * Created by Nick on 2017-09-23.
 */
import React, {Component} from 'react';
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
                    <li onClick={() => this.catesClick('推酷')}>推酷</li>
                    <li onClick={() => this.catesClick('开发者头条')}>开发者头条</li>
                </ul>
            </div>
        );
    }
}