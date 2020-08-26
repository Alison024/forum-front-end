import React,{ Component } from "react";
import Carousel from 'react-bootstrap/Carousel'
import './PostCarousel.css';

export default class PostSlider extends Component {

    
    constructor(props) {
        super(props)
        this.state = {
            data:props.data
        }
    }

    /*componentDidMount(){
        this.getValueOfPost();
    }
    getValueOfPost(){
       let targetUrl = 'https://localhost:5001/api/post/getPostById/'+this.state.post_Id;
       fetch(targetUrl)
       .then(res => res.json())
       .then((result) => {
           
               this.setState({
                    isLoaded: true,
                    data:result
               });
           },
           (errorr) => {
               this.setState({
                   isLoaded: true,
                   error:errorr
               });
           }
       )
    }*/


    render(){
        if(this.state.data.length>0){
            return(
                <div className="carousel-div">
                <Carousel className="carousel-inner">
                    {this.state.data.map((img,index)=>{
                        return(
                            <Carousel.Item key={index}>
                                <img
                                className="d-block slide-img"
                                src={img.image.image_Url}
                                alt={"Slide #"+(index+1)}
                                />
                                <Carousel.Caption>
                                <h3>{"Slide #"+(index+1)}</h3>
                                </Carousel.Caption>
                            </Carousel.Item>
                        )
                    })}
                </Carousel>
                </div>
            )
        }else{
            return(<div className="hidden"></div>);
        }
        
    }
}