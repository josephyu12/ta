import { Layout ,notification} from 'antd';
import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, useLocation, Link, Route, Switch, useHistory } from "react-router-dom";
import { InitialState, RootDispatcher } from "../store/root-reducer";
import { api_login } from '../utils/api';





const { Header, Content, Footer } = Layout;

interface StateProps {
    username: string;
}


const Login = () => {

    const { username } = useSelector<InitialState, StateProps>((state: InitialState) => {
        return {
            username: state.username
        }
    });
    const dispatch = useDispatch();
    const rootDispatcher = new RootDispatcher(dispatch);

    const history = useHistory()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const handleSubmit = async () => {
        if (email.length > 0 && password.length > 0) {
            let res = await api_login({ email, password })
            if (res.data.code === 1000) {
                console.log("1000")
                console.log(res.data)
                rootDispatcher.userLogIn(res.data.username)
                notification.info({
                    message: 'info',
                    description:
                      'You are successfully logged in!',
                    })
                
                
                history.push("/home")
            } else {
                notification.error({
                    message: 'Error',
                    description:
                      'Incorrect user name or password!',
                    })

               
            }

        }
    }

    return (
        <div className='container '>
            <div className="login-container ml-5 corner">
                <div>
                    <table>
                        <tbody>
                            <tr>
                                <td><label >Email Address:</label><br />
                                    <input placeholder="Email Address" type="text" id="login"
                                        value={email} onChange={e => setEmail(e.target.value)} name="login" size={40} maxLength={60} /></td>
                            </tr>
                            <tr>
                                <td><label >Password:</label><br />
                                    <input placeholder="Password" type="password" id="password"
                                        value={password} onKeyDown={e => { if (e.key === 'Enter') handleSubmit() }} onChange={e => setPassword(e.target.value)} name="password" size={40} maxLength={40} /></td>
                            </tr>
                            <tr>
                                <td>
                                    <input type='button' onClick={handleSubmit} id="submit" value="Login" aria-disabled="false" />
                                    <span style={{ "marginRight": "20px" }}> <a href="/user/register">Register</a>&nbsp;&nbsp;<a href="/user/pwreset">Forgot Password?</a> </span>
                                    <br />
                                </td>
                            </tr>
                        </tbody>
                    </table>

                </div>
            </div>
        </div>

    )
}

export default Login;


