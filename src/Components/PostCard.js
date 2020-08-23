import React,{ Component } from "react";
//import { Navbar, Container, Nav } from "react-bootstrap";
//import {Router} from "react-router"
import {NavLink} from "react-router-dom"
import './PostCard.css';
export default class PostsPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id:props.post.id,
            title:props.post.title,
            /*author_Id:props.author_Id,
            paren_Post_Id:props.paren_Post_Id,
            post_Type_Id:props.post_Type_Id,*/
            post_Content:props.post.post_Content,
            date:props.post.date,
            post_Rate:props.post.post_Rate,
            /*post_Images:props.post_Images,
            post_Sub_Categories:props.post_Sub_Categories*/
        }
    }
    render(){
        let stringId = "/posts/"+this.state.id;
        return (
            <div className="post-card">
                <NavLink className="link-on-post" to={stringId}>{this.state.title}</NavLink>
                <div className="post-card-info">
                    <div>Rate:{this.state.post_Rate}</div>
                    <div>Date:{this.state.date}</div>
                </div>
                
            </div>
        )
    }
}
