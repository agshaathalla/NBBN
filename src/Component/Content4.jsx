import QR from "../Assets/qr.jpg";
import Poster from "../Assets/poster.png";

const Content4 = () => {
    return (
        <div classname="w-full h-screen">
            <div className="md:text-5xl sm:text-3xl text-2xl font-bold py-2 text-[#0A415E] ml-[150px] mt-[50px]">
                <h1>FOR MORE EXPERIENCE</h1>
            </div>
            <div className="flex">
                <div className="w-[300px] mx-auto my-4">
                    <img src={QR} alt="/" />
                    <div>
                        <button className="bg-[#0A415E] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-[#DEF0F1]">
                            <a href="https://www.google.com/" target="_blank" rel="noreferrer">Click Here!!</a>
                        </button>
                    </div>
                </div>
                <div className="w-[460px] mx-auto my-4">
                    <img src={Poster} alt="/" />
                </div>
            </div>
        </div>
    );
};

export default Content4;
