import Navbar from "./Component/Navbar";
import Content1 from "./Component/Content1";
import Carousel from "./Component/Carousel";
import React from "react";
import {useState } from "react";


function App() {
    const [bg,setBg] = useState("bg-[#DEF0F1]")

    const changeBg=()=>{
        if(window.scrollY>window.innerHeight){
            setBg("bg-[#8ACBCF]")
        }else{
            setBg("bg-[#DEF0F1]")
        }
        console.log(window.scrollY,"scrollY")
        console.log(window.innerHeight,"inner")
    }

    window.addEventListener("scroll", changeBg)

    return (
        <div className={bg}>
            <Navbar />
            <Content1 />
            <Carousel/>
        </div>
    );
}
export default App;
