import Gambar2 from "../Assets/2.jpg";
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
        <div className="w-full h-screen border-2 border-red-300 flex justify-center items-center">
            <div className="relative">
                <ShakeSlow>
                    <img
                        className="w-[800px] mx-auto my-4 "
                        src={Gambar2}
                        alt="/"
                    />
                </ShakeSlow>
            </div>
            <div className="absolute ml-[-700px] font-bold text-6xl font-serif">
                <Collapse in={checked}>
                    <p>JUDULL</p>
                </Collapse>
                <Collapse in={checked}>
                    <p>JUDULLLLLL</p>
                </Collapse>
                <Collapse in={checked}>
                    <p className="text-base font-semibold">penjelasan dikit</p>
                </Collapse>
            </div>
        </div>
    );
};

export default Content3;
