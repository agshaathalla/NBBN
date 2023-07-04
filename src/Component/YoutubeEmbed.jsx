import React from "react";
import PropTypes from "prop-types";

const YoutubeEmbed = () => (
    <div className="">
        <div className="font-bold text-[#0A415E] text-2xl sm:text-3xl md:text-4xl ml-[285px] mt-[20px]">
            <h1>Simak video berikut</h1>
        </div>
        <div className="pb-[56.25%] h-0 relative">
            <iframe
                className="absolute top-[5%] left-[18%] w-[65%] h-[65%]"
                src={`https://www.youtube.com/embed/pbrpdUiSYMY`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
            />
        </div>
    </div>
);

YoutubeEmbed.propTypes = {
    embedId: PropTypes.string.isRequired,
};

export default YoutubeEmbed;
