import styled from "styled-components";
import PropTypes from "prop-types";

import Accolades from "./Accolades/Accolades";

const PortfolioItem = ({ member }) => {
    const { name, image, yearStarted, accolades } = member;

    return (
        <PortfolioItemStyled>
            <img src={image} alt="{name}" />
            <h3>{name}</h3>

            <div className="bottom">
                <p>
                    <b>Year Started:</b> {yearStarted}
                </p>

                <Accolades accolades={accolades} />
            </div>
        </PortfolioItemStyled>
    );
};

export default PortfolioItem;

// prop-types
PortfolioItem.propTypes = {
    member: PropTypes.object.isRequired,
};

const PortfolioItemStyled = styled.div`
    background-color: #eeeeee;

    img {
        width: 100%;
        display: block;
    }

    .bottom {
        padding: 20px;
    }

    h3 {
        color: white;
        background-color: #B7A7AE;
        padding: 5px 10px;
        margin: 0px;
    }
`;
