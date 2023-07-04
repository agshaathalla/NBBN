import Gambar from "./../Assets/3.png";
import Slide from "@mui/material/Slide";
import React from "react";

const Content2 = () => {
    const [checked, setChecked] = React.useState(false);

    const startAnimation=()=>{
        if((window.scrollY)>(2*window.innerHeight)-250){
            setChecked(true);
        }else{
            setChecked(false);
        }
    }
    React.useEffect(()=>{
        window.addEventListener("scroll", startAnimation)
    },[])
    return (
        <div className="w-full h-screen py-16 px-4">
            <Slide direction="right" in={checked} mountOnEnter unmountOnExit>
                {/* {icon} */}
                <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
                    <img className="w-[500px] mx-auto my-4 " src={Gambar} alt="/" />
                    <div className="flex flex-col justify-center">
                        <h1 className="md:text-5xl sm:text-3xl text-2xl font-bold py-2 text-[#DEF0F1]">
                            Yakin Udara Kita Sudah Bersih?
                        </h1>
                        <p className="text-justify text-[#DEF0F1] text-lg">
                            Udara yang selama ini kita hirup belum tentu udara yang bersih. Tanpa kita sadari, udara yang selama ini kita hirup bisa saja sudah tercemar. Pencemaran udara merupakan hadirnya suatu substansi fisik, kimia, maupun biologi di atmosfer dalam jumlah yang mengganggu kenyamanan hingga membahayakan kesehatan makhluk hidup. Terdapat banyak faktor penyumbang pencemaran udara di Indonesia, antara lain kendaraan, industri, pembangkit listrik dan lain-lain.

                        </p>
                    </div>
                </div>
            </Slide>
        </div>
    );
};

export default Content2;
