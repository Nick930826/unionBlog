/**
 * Created by Nick on 2017-09-24.
 */
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
const defaultImg = 'http://s.weituibao.com/site/images/1509441663174/1509417519336.jpg';
import './style.less';
export default class BoLe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataList: [],
            loading: false,
            page: 1
        };
        this.page = 1;
    }
    componentWillMount() {
    }
    componentDidMount() {
        axios.get(`/bole?page=${this.page}`).then(res => {
            console.log('res.data.postLists', res.data.postLists);
            this.setState({
                dataList: res.data.postLists,
            });
            this.page++;
        });
        const wrapper = this.refs.wrapper;
        const clientHeight = window.screen.height;
        window.addEventListener('scroll', () => {
            const windowHeight = document.body.scrollHeight;
            const top = wrapper.getBoundingClientRect().top;
            if (!this.state.loading && top && (~top + clientHeight) > windowHeight) {
                this.setState({
                    loading: true
                });
                axios.get(`/bole?page=${this.page}`).then(res => {
                    this.setState({
                        dataList: this.state.dataList.concat(res.data.postLists),
                        loading: false
                    });
                    this.page++;
                });
            }
        })
        
    }

    render() {
        const { dataList, loading } = this.state;
        return (
            <div className="bole" ref="wrapper">
                <ul>
                    {
                       dataList.length ?
                       dataList.map((item, index) => {
                            return <li key={index}>
                                <div className="bole-img">
                                    <img src={item.imgUrl || defaultImg} onError={(e) => {e.target.src = defaultImg;}} alt={item.author}/>
                                </div>
                                <div className="bole-title">
                                    <p className="desc"><a href={item.articleLink} target="_blank">{item.articleTitle}</a></p>
                                </div>
                            </li>
                       })
                       : null
                    }
                </ul>
                {
                    loading ?
                        <div className="load-more">加载更多...</div>
                        : null
                }
            </div>
        );
    }
}