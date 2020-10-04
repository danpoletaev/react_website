import React from 'react'
import {Nav, Navbar} from "react-bootstrap";
import {withStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import call_icon from '../images/call_icon.png';

const LoginButton = withStyles((theme) => ({
    root: {
        color: '#ffffff',
        fontSize: '12px',
        fontWeight: 'bold',
        background: 'linear-gradient(54deg, rgba(0,153,204,1) 0%, rgba(51,153,255,1) 87%)',
        '&:hover': {
            backgroundColor: '#126753',
        },
        borderRadius: '40px',
        padding: '15px',
        width: '120px'
    },
}))(Button);

const CustomNavbar = () => {
    return (
        <Navbar style={{padding: '30px', marginRight: '15%', paddingBottom: '0px'}}>
            <Navbar.Brand href="#home"></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto ">
                    <Nav.Link>
                        <img style={{width: '50px', margin: 0}} src={call_icon}/>
                    </Nav.Link>
                    <Nav.Link><LoginButton>Вход</LoginButton></Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default CustomNavbar