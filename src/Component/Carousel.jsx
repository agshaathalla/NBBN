import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

const Carousel = () => {
    const slides = [
        {
            url: "https://www.greenpeace.org/static/planet4-indonesia-stateless/2022/07/38db2437-image-2_polusi-jakarta.jpg",
        },
        {
            url: "https://cdn-2.tstatic.net/manado/foto/bank/images/ilustrasi-daftar-20-negara-dengan-tingkat-polusi-udara-tertinggi-di-dunia-2523.jpg",
        },
        {
            url: "https://akcdn.detik.net.id/visual/2019/09/16/460ece4d-4a14-4ce4-b790-16c13904a953_169.jpeg?w=650",
        },

        {
            url: "https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/jawapos/2022/06/IMG_20220617_074836_1.jpg",
        },
        {
            url: "https://assets.ayobandung.com/crop/0x0:0x0/750x500/webp/photo/2022/06/21/2015652926.jpg",
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };

    return (
        <div className="max-w-[1400px] h-screen w-[1000px] m-auto py-16 px-4 relative group border-2 border-red-300">
            <div className="font-bold text-[#0A415E] text-2xl sm:text-3xl md:text-4xl">
                <h1>Gambaran Polusi Udara di Indonesia</h1>
            </div>
            <div
                style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
                className="h-[300px] md:h-[500px] rounded-2xl bg-center bg-cover duration-500"
            ></div>
            {/* Left Arrow */}
            <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                <BsChevronCompactLeft onClick={prevSlide} size={30} />
            </div>
            {/* Right Arrow */}
            <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                <BsChevronCompactRight onClick={nextSlide} size={30} />
            </div>
            <div className="flex top-4 justify-center py-2">
                {slides.map((slide, slideIndex) => (
                    <div
                        key={slideIndex}
                        onClick={() => goToSlide(slideIndex)}
                        className="text-2xl cursor-pointer"
                    >
                        <RxDotFilled />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Carousel;
