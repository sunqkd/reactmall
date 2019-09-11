import React , {Component} from 'react';

import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Home extends Component {
    constructor(props) {

        super(props);
        this.state = { 
            list:[], // 列表数据
            domain:'http://a.itying.com/', // 域名拼接
        }

    }

    render() {
        return (
            <div className="home">

                <div className="list">
                    {
                        this.state.list.map((value,key)=>{
                            return (
                                <div className="item" key={key}>
                                    <h3 className="item_cate">{value.title}</h3>
                                    <ul className="item_list">
                                        {
                                            value.list.map((valuelist,index)=>{
                                                return (
                                                    <li key={index}>	
                                                        <Link to={`/pcontent/${valuelist._id}`}>
                                                            <div className="inner">
                                                                <img src={`${this.state.domain}${valuelist.img_url}`} />
                                                                <p className="title">{valuelist.title}</p>						
                                                                <p className="price">{'￥'+ valuelist.price}</p>
                                                            </div>	
                                                        </Link>	
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            )
                        })
                    }
                </div>

            </div>
        )
    }

    // 获取数据

    getData = () => {
        axios.get('http://a.itying.com/api/productlist').then((res)=>{

            console.log(res.data.result);

            this.setState({
                list:res.data.result
            })

        }).catch(()=>{

        })
    }

    // 请求数据
    componentDidMount(){
        this.getData();
    }
}

export default Home;

