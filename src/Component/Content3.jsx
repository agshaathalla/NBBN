import Gambar2 from "../Assets/chart.png";
import { ShakeSlow } from "reshake";
import Collapse from '@mui/material/Collapse';
import React from "react";

const Content3 = () => {
    const [checked, setChecked] = React.useState(false);

    const startAnimation=()=>{

        if((window.scrollY)>(3*window.innerHeight)-150){
            setChecked(true);
        }else{
            setChecked(false);
        }
    }
    React.useEffect(()=>{
        window.addEventListener("scroll", startAnimation)
    },[])

    return (
        <div className="w-full h-screen flex justify-center items-center">
            <div className="relative">
                <ShakeSlow>
                    <img
                        className="w-[1000px] mx-auto my-4 "
                        src={Gambar2}
                        alt="/"
                    />
                </ShakeSlow>
            </div>
            <div className="absolute ml-[-600px] font-bold text-6xl font-serif text-[#0A415E]">
                <Collapse in={checked}>
                    <p>Kematian</p>
                </Collapse>
                <Collapse in={checked}>
                    <p>Akibat Udara Buruk</p>
                </Collapse>
                <Collapse in={checked}>
                    <p className="text-2xl font-medium">Kualitas udara yang buruk dapat menyebabkan berbagai <br/> macam penyakit pernafasan sehingga mengancam manusia</p>
                </Collapse>
            </div>
        </div>
    );
};

export default Content3;
