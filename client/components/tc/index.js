/**
 * Created by Nick on 2017-09-24.
 */
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './style.less';
export default class TC extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataList: [],
            loading: false,
            page: 1
        };
        this.page = 0;
    }
    componentWillMount() {
    }
    componentDidMount() {
        axios.get(`/tc?page=${this.page}`).then(res => {
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
                axios.get(`/tc?page=${this.page}`).then(res => {
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
            <div className="tc" ref="wrapper">
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
                {
                    loading ?
                        <div className="load-more">加载更多...</div>
                        : null
                }
            </div>
        );
    }
}