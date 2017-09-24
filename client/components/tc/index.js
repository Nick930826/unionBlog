/**
 * Created by Nick on 2017-09-24.
 */
import React, {Component} from 'react';
import axios from 'axios';
import './style.less';
export default class TC extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataList: []
        };
    }

    componentDidMount() {
        axios.get('/tc').then(res => {
            this.setState({
                dataList: res.data.postLists
            });
        });
    }

    render() {
        const { dataList } = this.state;
        console.log('dataList', dataList);
        return (
            <div className="tc">
                <ul>
                    {
                       dataList.length ?
                       dataList.map((item, index) => {
                            return <li key={index}>
                                <div className="tc-img">
                                    <img src={item.imgUrl} alt={item.author}/>
                                </div>
                                <div className="tc-title">
                                    <p className="desc"><a href={item.articleLink} target="_blank">{item.articleTitle}</a></p>
                                    <p className="author">{item.author}<span>{item.time}</span></p>
                                </div>
                            </li>
                       })
                       : null
                    }
                </ul>
            </div>
        );
    }
}