import React, { useState } from "react";
import Header from "./Components/Header/Header.jsx";
import Main from "./Components/Main/Main.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import { MenuMobile } from "./Components/MenuMobile/MenuMobile.jsx";

export default function App(){
  const [menuIsVisible, setMenuIsVisible] = useState(false);

    return(
      <>
        <MenuMobile 
        menuIsVisible={menuIsVisible} 
        setMenuIsVisible={setMenuIsVisible}
        />
        <Header setMenuIsVisible={setMenuIsVisible}/>
        <Main/>
        <Footer/>
      </>
    )
  }

