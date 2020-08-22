import React,{ Component } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
//import forum_logo from './forum-logo.jpg'
//import {Router} from "react-router"
import PostCard from '../Components/PostCard.js'
export default class PostsPage extends Component {

    
    constructor(props) {
        super(props)
        this.state = {
            isloaded:true,
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
            (error) => {
                this.setState({
                    isLoaded: true,
                    error:error
                });
            }
        )
    }


    render(){
        //const { error, isLoaded, dataJson } = this.state;
        if(this.state.error){
        return <div className="error-div">Error: {this.state.error.message}</div>
        }else if(!this.state.isLoaded){
            return <div className="load-div">Loading...</div>
        }else{
            return (
                <ul>
                    {this.state.dataJson.map(item=>(
                        <PostCard post={item}/>
                        //<li key={item.id}>{item.title}{item.post_Rate}</li>
                    ))}
                </ul>
            )
        }
    }
}