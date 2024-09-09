import styled from "styled-components";

import React from "react";
import ReactPlayer from "react-player/youtube";

const PortfolioVideo = () => {
    return (
        <PortfolioVideoStyled>
            <ReactPlayer
                url="https://www.youtube.com/watch?v=OO2kPK5-qno&ab_channel=LofiCoffee"
                width="100%"
                height="100%"
            />
        </PortfolioVideoStyled>
    );
};

export default PortfolioVideo;

const PortfolioVideoStyled = styled.div`
    aspect-ratio: 4 / 1.5;
    margin-bottom: 20px;
    margin-top: 20px;
`;
