import React , {Component} from 'react';

// 用户组件
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Info from './User/Info';
import Main from './User/Main';

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className="userName">
                <div className="content" style={{"width":'100%',"display":'flex',}}>
                    <div className="left" style={{"width":'200px',"height":'500px',"background":'pink'}}>
                        <ul>
                            <li>
                                <Link to="/user/">Main</Link>
                            </li>
                            <li>
                                <Link to="/user/info">Info</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="right" style={{"flex":1,"height":'500px',"background":'gray'}}>
                        <Route path="/user/" exact component={Main}></Route>
                        <Route path={`${this.props.match.url}/info`} component={Info}></Route>
                    </div>
                </div>
            </div>
        );
    }
}

export default User;