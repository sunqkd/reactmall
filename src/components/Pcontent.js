import React , {Component} from 'react';
import axios from 'axios';

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
                <div className="back">返回</div>
                
                <div className="p_content">		
                    <div className="p_info">				
                        <img src="images/product.jpg"/>				
                        <h2>{this.state.list.title}</h2>				
                        <p className="price">22.00/份</p>
                    </div>
                    <div className="p_detial">
                        <h3>
                            商品详情					
                        </h3>
                        <div className="p_content"> 
                            <img src="images/product.jpg"/>
                            <br />
                            <p>
                                韩国辣酱海鲜炒面,青椒炒牛肉,芦笋腰果炒虾仁,『家常料理』简单又好吃的辣炒起司年糕鸡排
                            </p>
                            
                            <br />
                            <p>
                                韩国辣酱海鲜炒面,青椒炒牛肉,芦笋腰果炒虾仁,『家常料理』简单又好吃的辣炒起司年糕鸡排
                            </p>
                        </div>
                    </div>
                </div>
                
                
                <footer className="pfooter">
                    
                    <div className="cart">				
                        <strong>数量:</strong>
                        <div className="cart_num">
                        <div className="input_left">-</div>
                        <div className="input_center">
                            <input type="text"  readonly="readonly" value="1" name="num" id="num" />
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