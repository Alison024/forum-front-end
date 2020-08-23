import React,{ Component } from "react";
import { Container } from "react-bootstrap";
import Spinner from 'react-bootstrap/Spinner'
import './Post.css';

export default class Post extends Component {

    
    constructor(props) {
        super(props)
        this.state = {
            post_Id:parseInt(props.match.params.number, 10),
            isLoaded:true,
            data:null,
            error:null
        }
    }

    componentDidMount(){
        this.getValueOfPost();
    }
    getValueOfPost(){
       let targetUrl = 'https://localhost:5001/api/post/getUserById/'+this.state.post_Id;
       fetch(targetUrl)
       .then(res => res.json())
       .then((result) => {
               this.setState({
                    isLoaded: true,
                    id:result.id,
                    title:result.title,
                    author_Id:result.author_Id,
                    paren_Post_Id:result.paren_Post_Id,
                    post_Type_Id:result.post_Type_Id,
                    post_Content:result.post_Content,
                    date:result.date,
                    post_Rate:result.post_Rate,
                    post_Images:result.post_Images,
                    post_Sub_Categories:result.post_Sub_Categories,
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
    }


    render(){
        if(this.state.error){
            return <div className="error-div">Error: {this.state.error.message}</div>
        }else if(!this.state.isLoaded){
            return(
                <div className="loading-div">
                    <Spinner animation="border" role="status" className="spinner">
                    <span className="sr-only">Loading...</span>
                    </Spinner>
                </div>
        )
        }else{
                return(
                <Container>
                    <div>{this.state.post_Content}</div>
                    <div>{this.state.author_Id}</div>
                    <div>{this.state.date}</div>
                    <div>{this.state.post_Rate}</div>
                    
                    
                </Container>
            )
        }
    }
}