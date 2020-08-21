import React from 'react';
import './App.css';
import HeaderManu from "./Components/HeaderMenu.js";
import Footer from "./Components/Footer.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Route} from 'react-router-dom';
import HomePage from "./Pages/HomePage.js"
import PostsPage from "./Pages/PostsPage.js"
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <HeaderManu/>
        <div className = "Content-div">
          <Route path='/posts' component={PostsPage}/>
          <Route path='/home' component={HomePage}/>
        </div>
        <Footer/>
      </div>
    </BrowserRouter>
    /*<div className="App">
    <HeaderManu/>
    </div>*/
  );
}

export default App;
