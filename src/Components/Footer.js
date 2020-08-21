import React,{ Component } from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { Container } from "react-bootstrap";
import './Footer.css';

export default class Footer extends Component {
    render(){/* mt-4*/
        return (
            <MDBFooter className="font-small pt-4 footer-div">
                <Container>
                <MDBContainer fluid className="text-center text-md-left">
                    <MDBRow>
                        <MDBCol className="links-col" md="4">
                            <ul>
                            <li className="list-unstyled">
                                <h5 /*className="text-color"*/>Categories</h5>
                                </li>
                                <li className="list-unstyled">
                                    <a href="#!">Link 1</a>
                                </li>
                                <li className="list-unstyled">
                                    <a href="#!">Link 2</a>
                                </li>
                            </ul>
                        </MDBCol>
                        <MDBCol className="links-col" md="4">
                            <ul>
                            <li className="list-unstyled">
                                <h5>Links</h5>
                                </li>
                                <li className="list-unstyled">
                                    <a href="#!">Link 1</a>
                                </li>
                                <li className="list-unstyled">
                                    <a href="#!">Link 2</a>
                                </li>
                            </ul>
                        </MDBCol>
                        <MDBCol className="links-col" md="4">
                            <ul>
                            <li className="list-unstyled">
                                <h5>Contacts</h5>
                                </li>
                                <li className="list-unstyled">
                                    <a href="#!">Link 1</a>
                                </li>
                                <li className="list-unstyled">
                                    <a href="#!">Link 2</a>
                                </li>
                            </ul>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
                <div className="footer-copyright text-center py-3">
                    <MDBContainer fluid className="text-color">
                    &copy; {new Date().getFullYear()} Copyright: <a href="https://www.mdbootstrap.com"> MDBootstrap.com </a>
                    </MDBContainer>
                </div>
                </Container>
            </MDBFooter>
        )
    }
}