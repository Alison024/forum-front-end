import React,{ Component } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import forum_logo from './forum-logo.jpg'
import {Router} from "react-router"

export default class HeaderMenu extends Component {
    render(){
        return (
            <Navbar fixed="top" collapseOnSelect expand="md" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">
                        <img
                            src={forum_logo}
                            height = "50"
                            width = "50"
                            className="d-inline-block align-top"
                            alt="Forum logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/posts">Posts</Nav.Link>
                            <Nav.Link href="/categories">Categories</Nav.Link>
                            <Nav.Link href="/account">Your account</Nav.Link>
                        </Nav>
                        <Nav className="mr-2">
                            <Nav.Link href="/">Sign in</Nav.Link>
                            <Nav.Link href="/">Log in</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            

        )
    }
}