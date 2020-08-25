import React,{ Component } from "react";
import { Container } from "react-bootstrap";
import Spinner from 'react-bootstrap/Spinner'
import './Post.css';
import AuthorDiv from './AuthorDiv.js'
export default class Post extends Component {

    
    constructor(props) {
        super(props)
        this.state = {
            post_Id:parseInt(props.match.params.number, 10),
            isLoaded:false,
            data:null,
            error:null
        }
    }

    componentDidMount(){
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
                    <div className="post-info md-12">
                        <div>{this.state.data.date}</div>
                        <div><AuthorDiv id={this.state.data.author_Id}/></div>
                    </div>
                    <h1>{this.state.data.title}</h1>
                    <div>{this.state.data.post_Content}</div>
                    <div>
                        {this.state.data.post_Images.map(x=><div>{x.image.image_Url}</div>)}
                    </div> 
                    </Container>
            )
        }
    }
}