import React , {Component} from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
class Pcontent extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            list:{}, // 列表数据
            domain:'http://a.itying.com/', // 域名拼接
        }
    }

    getData = ()=>{
       
        var api = 'http://a.itying.com/api/productcontent?id='+ this.props.match.params.id;
        axios.get(api).then((res)=>{
            console.log(res)
            this.setState({
                list:res.data.result[0]
            })
        }).catch(()=>{

        })

    }

    render() {
        return (
            <div className="pcontent"> 
                <div className="back">
                    <Link to='/'>返回</Link>
                </div>
                
                <div className="p_content">		
                    <div className="p_info">	
                        {this.state.list.img_url? <img src={`${this.state.domain}${this.state.list.img_url}`}/>	:''}						
                        <h2>{this.state.list.title}</h2>				
                        <p className="price">{this.state.list.price}/份</p>
                    </div>
                    <div className="p_detial">
                        <h3>
                            商品详情					
                        </h3>
                        <div className="p_content" dangerouslySetInnerHTML={{__html: this.state.list.content}} > 

                        </div>
                    </div>
                </div>
                
                
                <footer className="pfooter">
                    
                    <div className="cart">				
                        <strong>数量:</strong>
                        <div className="cart_num">
                        <div className="input_left">-</div>
                        <div className="input_center">
                            {/* <input type="text"  readonly="readonly" value="1" name="num" id="num" /> */}
                        </div>
                        <div className="input_right">+</div>				      
                        </div>								
                    
                    </div>
                    
                    <button className="addcart">加入购物车</button>			
                </footer>
            </div>
        )
    }

    componentDidMount(){
        this.getData();
    }
}

export default Pcontent;