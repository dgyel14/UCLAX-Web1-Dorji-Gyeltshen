import React from "react";
import styled from "styled-components";

/* Images ---------------------------*/
import logoUrl from "./Bows-Logo.png";

const SiteLogo = () => {
    return (
        <SiteLogoStyled className="SiteLogo">
            <img src={logoUrl} alt="Bows Logo" />
        </SiteLogoStyled>
    );
};

export default SiteLogo;

const SiteLogoStyled = styled.div`
    color: #e1d5d9;
    width: 100%;
    height: 100%;

    img {
        width: 100%;
        height: auto;
    }
`;
