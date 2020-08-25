import React,{ Component } from "react";
import { Container } from "react-bootstrap";
import Spinner from 'react-bootstrap/Spinner'
import './Post.css';

export default class AuthorDiv extends Component {

    
    constructor(props) {
        super(props)
        this.state = {
            author_Id:props.id,
            isLoaded:false,
            data:null,
            error:null
        }
    }

    componentDidMount(){
        this.getValueOfPost();
    }
    getValueOfPost(){
       let targetUrl = 'https://localhost:5001/api/users/getUserById/'+this.state.author_Id;
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
            return(<div></div>);
        }else{
            return(
                <div>Author: {this.state.data.user_Name}</div>
            )
        }
    }
}