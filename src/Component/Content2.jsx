import Gambar from "./../Assets/1.jpeg";
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
                        <h1 className="md:text-5xl sm:text-3xl text-2xl font-bold py-2">
                            Judul
                        </h1>
                        <p className="text-justify">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Voluptatum aliquam expedita amet, quidem beatae maiores
                            aspernatur culpa excepturi blanditiis in accusantium
                            esse, quos praesentium eaque magni reiciendis odio cum?
                            Voluptatem doloribus impedit dignissimos error,
                            consequuntur excepturi eveniet iusto adipisci id. Minus
                            unde fuga officia vel nihil soluta facere cupiditate
                            quae?
                        </p>
                    </div>
                </div>
            </Slide>
        </div>
    );
};

export default Content2;
