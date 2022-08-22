import React, { Component } from "react";
import Header from "./Components/Header/Header.jsx";
import Main from "./Components/Main/Main.jsx";
import Footer from "./Components/Footer/Footer.jsx";

export default class App extends Component{
  render(){
    return(
      <div>
        <Header/>
        <Main/>
        <Footer/>
      </div>
    )
  }
}
