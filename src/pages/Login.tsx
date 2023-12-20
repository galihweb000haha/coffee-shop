import React, {Component} from "react";
import { StyledButton } from '../components/Button';
import {StyledInput} from '../components/Input';
import NavbarComponent from "../components/Navbar"

export default class Login extends Component {
    componentDidMount() {
        
    }
    render() {
        const formStyled = {
            width: "300px",
            margin: "auto",
            marginTop: "40px",
            marginBottom: "40px",
        }
        return (
            <>
            <NavbarComponent/>
                <div style={formStyled}>
                    <h1>Login</h1>
                    <StyledInput type='text' name='username' id='username' placeholder="Username" style={{marginBottom: '10px'}}/>
                    <StyledInput type='password' name='password' id='password' placeholder="Password" style={{marginBottom: '10px'}}/>
                    <StyledButton type="primary">Login</StyledButton>
                </div>
            </>
        )
    }
}