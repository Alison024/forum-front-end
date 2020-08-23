import React,{ Component } from "react";
import { Container } from "react-bootstrap";
//import forum_logo from './forum-logo.jpg'
//import {Router} from "react-router"
import Spinner from 'react-bootstrap/Spinner'
import PostCard from '../Components/PostCard.js'

export default class PostsPage extends Component {

    
    constructor(props) {
        super(props)
        this.state = {
            isLoaded:true,
            dataJson:[],
            error:null
        }
    }

    componentDidMount(){
        this.refreshList();
    }
    refreshList(){
        //let proxyUrl = 'https://cors-anywhere.herokuapp.com/'
        let targetUrl = 'https://localhost:5001/api/post'
        fetch(targetUrl)
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    isLoaded: true,
                    dataJson: result
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
        //const { error, isLoaded, dataJson } = this.state;
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
            return (
                <Container>
                    <div>
                        {this.state.dataJson.map(item=>(
                            <PostCard key={item.id} post={item}/>
                            //<li key={item.id}>{item.title}{item.post_Rate}</li>
                        ))}
                    </div>
                </Container>
                
            )
        }
    }
}