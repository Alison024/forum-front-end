import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel'
import './HomePage.css';
export default class HomePage extends Component {
    render() {
        return (
            <Container>
                <div className="carousel-div">
                    <Carousel className="carousel-inner">
                        <Carousel.Item className="item">
                            <img
                                className="d-block carousel-img"
                                src="https://www.cmsmusic.org/wp-content/uploads/20161020_194312_resized.jpg"
                                alt=""
                            />
                            <Carousel.Caption>
                                <h3>""</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block carousel-img"
                                src="https://www.kinhaven.org/wp-content/uploads/2019/02/Kinhaven-2017-367-1-980x600.jpg"
                                alt=""
                            />
                            <Carousel.Caption>
                                <h3>""</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block carousel-img"
                                src="https://images.squarespace-cdn.com/content/v1/56066f6be4b0983210424eb1/1519473538100-C7G1LH7RLPPHWS0TOEJV/ke17ZwdGBToddI8pDm48kFWxnDtCdRm2WA9rXcwtIYR7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UcTSrQkGwCGRqSxozz07hWZrYGYYH8sg4qn8Lpf9k1pYMHPsat2_S1jaQY3SwdyaXg/GSM+Pupil+Concert+Charlton+House+Finals+Low+Res-24.jpg?format=2500w"
                                alt=""
                            />
                            <Carousel.Caption>
                                <h3>""</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </Container>
        )
    }
}