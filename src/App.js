import React from 'react';
import './App.css';
import HeaderManu from "./Components/HeaderMenu.js";
import Footer from "./Components/Footer.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import HomePage from "./Pages/HomePage.js"
import PostsPage from "./Pages/PostsPage.js"
import Post from "./Components/Post.js";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <HeaderManu/>
        <div className = "Content-div">
          <Switch>
            <Route path='/home' component={HomePage}/>
            <Route path='/posts/:number' component={Post}/>
            <Route path='/posts' component={PostsPage}/>
            
          </Switch>
        </div>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
