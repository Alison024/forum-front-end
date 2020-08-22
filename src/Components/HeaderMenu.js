import React,{ Component } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import {NavLink} from "react-router-dom"
import forum_logo from './forum-logo.jpg'
import './HeaderMenu.css';

export default class HeaderMenu extends Component {
    render(){
        return (
            <Navbar fixed="top" collapseOnSelect expand="md" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand>
                        <NavLink to="/home">
                            <img
                                src={forum_logo}
                                height = "50"
                                width = "50"
                                className="d-inline-block align-top"
                                alt="Forum logo"
                            />
                        </NavLink>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <NavLink className="menu-link" to="/home">Home</NavLink>
                            <NavLink className="menu-link" to="/posts">Posts</NavLink>
                            <NavLink className="menu-link" to="/categories">Categories</NavLink>
                            <NavLink className="menu-link" to="/account">Your account</NavLink>
                        </Nav>
                        <Nav className="mr-2">
                            <NavLink className="menu-link" to="/">Sign in</NavLink>
                            <NavLink className="menu-link" to="/">Log in</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}