import React , {Component} from 'react';

import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
  } from "react-router-dom";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            username:'',
            psw:'',
            loginFlag:false,
        };
    }

    doLogin = (e)=>{
        e.preventDefault(); // 阻止默认提交行为

        if(this.state.username === 'admin' && this.state.psw === '123456'){
            this.setState({
                loginFlag:true
            })
        }else{
            this.setState({
                loginFlag:false
            })
        }
    }

    useNameChange = (e) =>{
        this.setState({
            username:e.target.value
        })
    }

    pswChange = (e)=>{
        this.setState({
            psw:e.target.value
        })
    }

    render() {

        if(this.state.loginFlag){ // 执行跳转
            // return <Redirect to={ { pathname:"/" } }/>

            return <Redirect to="/" />
            
        }else{

        }

        return (
            <div>

                <form onSubmit={this.doLogin}>
                    <input type="text" value={this.state.username} onChange={this.useNameChange} />
                    <input type="password" value={this.state.psw} onChange={this.pswChange}/>
                    <input type="submit" value="执行登录"/>
                </form>
               
            </div>
        );
    }
}

export default Login;