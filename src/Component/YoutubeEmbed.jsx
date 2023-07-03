import React from "react";
import PropTypes from "prop-types";

const YoutubeEmbed = () => (
  <div className="pb-[56.25%] h-0 relative">
    <iframe
      className="absolute top-[15%] left-[15%] w-[70%] h-[70%]"
      src={`https://www.youtube.com/embed/pbrpdUiSYMY`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed;