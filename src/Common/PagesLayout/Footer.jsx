import styled from 'styled-components';

/* Components ---------------------------*/
import Inset from './Inset.jsx';
import SiteLogo from './SiteLogo/SiteLogo.jsx';

const Footer = () => {
    return (
        <FooterStyled className='Footer'>
            <Inset>
                <div className="logo">
                    <SiteLogo />
                </div>
                <h2>
                    Dorji Gyeltshen Design :: Peace, Love, Unity, Fitness, Chill, and Respect :: Professor Mitch Gohman
                </h2>
                <div className="copyright">
                    &copy; Summer 2024. UCLA Web Design I: HTML, CSS and Java Script | Los Angeles, CA
                </div>
            </Inset>
        </FooterStyled>
    );
}

export default Footer;

const FooterStyled = styled.footer`
    color: white;

    padding: 20px 0px;

    text-align: center;

    .logo {
        display: flex;
        justify-content: center;
        .SiteLogo {
            margin-bottom: 10px;
            width: 150px;
        }
    }

    h2 {
        color: white;
        margin: 5px 0px;
        font-size: 14px;
    }

    .copyright {
        font-size: 14px;
        color: white;
    }

`;