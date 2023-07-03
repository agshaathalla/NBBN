import Navbar from "./Component/Navbar";
import Content1 from "./Component/Content1";
import Content2 from "./Component/Content2";
import Content3 from "./Component/Content3";
import Carousel from "./Component/Carousel";
import React from "react";
import {useState } from "react";
import YoutubeEmbed from "./Component/YoutubeEmbed";


function App() {
    const [bg,setBg] = useState("bg-[#DEF0F1]")

    const changeBg=()=>{
        if((window.scrollY)>(3*window.innerHeight)-250){
            setBg("bg-[#498CA3] transition duration-1000")
        }else if((window.scrollY)>(2*window.innerHeight)-250){
            setBg("bg-[#0A415E] transition duration-1000")
        }else if(window.scrollY>window.innerHeight-250){
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
            <Content2 />
            <Content3 />
            <YoutubeEmbed />
        </div>
    );
}
export default App;