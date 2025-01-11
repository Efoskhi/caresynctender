import styled, { keyframes } from "styled-components";
import DashboardFilter from "../components/DashboardFilter.jsx";
import Colors from "../theme/Colors.js";
import Dimensions from "../theme/Dimensions.js";
import { IonIcon } from "@ionic/react";
import { star, arrowRedo } from "ionicons/icons";
import Footer from "../components/Footer.jsx";

import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";
import image5 from "../assets/image5.png";
import image6 from "../assets/image6.jpg";
import bidImage1 from "../assets/bidimage1.png";
import bidImage2 from "../assets/bidimage2.jpg";
import bidImage3 from "../assets/bidimage3.jpg";
import blackManImage from "../assets/blackman.png";

const Dashboard = () => {

    return (
        <>
            <StyledWrapper>
                <StyledPageHeaderWrapper>
                    <StyledIntroTextWrapper>
                        <StyledIntroText>Discover <StyledIntroText className="colored">Healthcare Tender</StyledIntroText></StyledIntroText>
                        <StyledIntroText><StyledIntroText className="colored">Opportunities:</StyledIntroText> Your Gateway to </StyledIntroText>
                        <StyledIntroText>Growth in the Healthcare Sector</StyledIntroText>
                        <StyledIntroParagraph>Find tailored tenders across the UK healthcare industry. Whether you specialise in domiciliary care, supported living, or nursing services, our Tender Feed connects you with contracts that match your expertise. Stay compliant with key regulations like CQC, OFSTED, RQIA, and CIW as you bid with confidence.</StyledIntroParagraph>
                    </StyledIntroTextWrapper>
                    <StyledMovingImageWrapper>
                        <StyledImagesWrapper>
                            <StyledImageWrapper>
                                <StyledImage src={ image1 }/>
                            </StyledImageWrapper>
                            <StyledImageWrapper>
                                <StyledImage src={ image2 }/>
                            </StyledImageWrapper>
                            <StyledImageWrapper>
                                <StyledImage src={ image3 }/>
                            </StyledImageWrapper>
                        </StyledImagesWrapper>
                        <StyledImagesWrapper>
                            <StyledImageWrapper>
                                <StyledImage src={ image4 }/>
                            </StyledImageWrapper>
                            <StyledImageWrapper>
                                <StyledImage src={ image5 }/>
                            </StyledImageWrapper>
                            <StyledImageWrapper>
                                <StyledImage src={ image6 }/>
                            </StyledImageWrapper>
                        </StyledImagesWrapper>
                    </StyledMovingImageWrapper>
                </StyledPageHeaderWrapper>

                <StyledPageContent>
                    <StyledHeading>Current Tender Opportunities</StyledHeading>
                    <DashboardFilter/>
                </StyledPageContent>
                <StyledBidWrapper>
                    <StyledBidTitle>Make Your Bid Stand Out</StyledBidTitle>
                    <StyledBidLabel>We know navigation the tender process and meeting regulatory requirements</StyledBidLabel>
                    <StyledBidLabel>can be challenging. That's why <StyledBidLabelColored> Care Sync Expert is here to help:</StyledBidLabelColored></StyledBidLabel>

                    <StyledBidsContainer>
                        <StyledBid>
                            <StyledBidImageWrapper>
                                <StyledBidImage src={ bidImage1 }/>
                            </StyledBidImageWrapper>
                            <StyledBidTitle className="child">Bid Writing Services</StyledBidTitle>
                            <StyledBidLabel className="child">Request professional support to craft a winning bid.</StyledBidLabel>
                        </StyledBid>
                        <StyledBid>
                            <StyledBidImageWrapper>
                                <StyledBidImage src={ bidImage2 }/>
                            </StyledBidImageWrapper>                       
                            <StyledBidTitle className="child">Expert Compliance Chacks</StyledBidTitle>
                            <StyledBidLabel className="child">Ensure your proposalmeets CQC, OFSTED, RQIA, or CIW standards.</StyledBidLabel>
                        </StyledBid>
                        <StyledBid>
                            <StyledBidImageWrapper>
                                <StyledBidImage src={ bidImage3 }/>
                            </StyledBidImageWrapper>                        
                            <StyledBidTitle className="child">One Click Support</StyledBidTitle>
                            <StyledBidLabel className="child">Need assistance? Reach out directly from our feed</StyledBidLabel>
                        </StyledBid>
                    </StyledBidsContainer>
                </StyledBidWrapper>

                <StyledOpportunitiesWrapper>
                    <StyledOpportunityImage src={ blackManImage }/>
                    <StyledOpportunityContent>
                        <StyledStarsWrapper>
                            <StyledStarIcon icon={star}/>
                            <StyledStarIcon icon={star}/>
                            <StyledStarIcon icon={star}/>
                            <StyledStarIcon icon={star}/>
                            <StyledStarIcon icon={star}/>
                            <StyledStarIcon icon={star}/>
                        </StyledStarsWrapper>
                        <StyledOpportunityTitle>Unlock Opportunities Today</StyledOpportunityTitle>
                        <StyledUL>
                            <StyledLI>Explore new tenders across the health care industry</StyledLI>
                            <StyledLI>Save tenders to your personalised dashboard for quick follow up.</StyledLI>
                            <StyledLI>Stay notified with real time alerts about new opportunities</StyledLI>
                        </StyledUL>
                        <StyledBottomTenderWrapper>
                            <StyledBottomTenderText>Ready to find your next tender?</StyledBottomTenderText>
                            <StyledBottomTenderButton>
                                Start Exploring
                                <StyledBottomTenderIcon icon={arrowRedo}/>
                            </StyledBottomTenderButton>
                        </StyledBottomTenderWrapper>
                    </StyledOpportunityContent>
                </StyledOpportunitiesWrapper>

            </StyledWrapper>
            <Footer/>
        </>
    )
}

export default Dashboard;

const moveLeftToRight = keyframes`
    0% {
        transform: translateX(-50%);
    }
    50% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(50%);
    }
`

const moveRightToLeft = keyframes`
    0% {
        transform: translateX(50%);
    }
    50% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(-50%);
    }
`

const StyledWrapper = styled.div`
    flex: 1;
    margin: 20px 50px;

    @media screen and (max-width: ${Dimensions.mobileMaxWidth}){
       margin: 20px 25px;
    }
`

const StyledPageHeaderWrapper = styled.div`
    display: grid;
    align-items: center;
    // justify-content: space-between;
    grid-template-columns: 1fr 1fr;

    @media screen and (max-width: ${Dimensions.tabletMaxWidth}){
        display: block;
    }
`

const StyledIntroTextWrapper = styled.div`
    // width: 50%;
`

const StyledIntroText = styled.h1`
    font-weight: 700;
    font-size: 2rem;
    color: ${Colors.primary_black};
    // line-height: 50px;

    &.colored {
        color: ${Colors.secondary_green};
        display: inline;
    }
`

const StyledIntroParagraph = styled.p`
    font-weight: 400;
    font-size: 18px;
    color: ${Colors.secondary_black};
    // width: 70%;
    margin: 20px 0;
`

const StyledMovingImageWrapper = styled.div`
    overflow: hidden;
    // width: 100%;
`

const StyledImagesWrapper = styled.div`
    display: flex;
    gap: 15px;
    align-items: center;
    justify-content: space-between;

    // overflow: hidden;

    &:first-child {
        animation: ${moveLeftToRight} 20s ease-in-out infinite alternate;
    }

    &:last-child {
        animation: ${moveRightToLeft} 20s ease-in-out infinite alternate;
    }
`
const StyledImageWrapper = styled.div`
    width: 200px;
    height: 200px;
    overflow: hidden;
    border-radius: 15px;
    margin-bottom: 15px;
    // flex-shrink: 0;

    @media screen and (max-width: ${Dimensions.tabletMaxWidth}){
        width: 100%;
    }

    @media screen and (max-width: ${Dimensions.mobileMaxWidth}){
        width: 100px;
        height: 100px;
    }
`

const StyledImage = styled.img`
    width: inherit;
    height: inherit;
    object-fit: cover;
`

const StyledPageContent = styled.div`
    margin-top: 80px;

    @media screen and (max-width: ${Dimensions.mobileMaxWidth}){
        margin-top: 20px;
    }
`

const StyledHeading = styled.h1`
    font-weight: 700;
    font-size: 26px;
    color: ${Colors.primary_black};
`

const StyledBidWrapper = styled.div`
    margin: 50px 0;
    padding: 40px;
    background: ${Colors.primary_green};
    border-radius: 20px;
`

const StyledBidTitle = styled.h1`
    text-align: center;
    color: ${Colors.tertiary_green};
    font-size: 42px;

    &.child {
        text-align: left;
        font-size: 22px;
        color: white;
        font-weight: 500;
        margin-top: 15px; 
    }
`

const StyledBidLabel = styled.p`
    text-align: center;
    color: white;
    font-size: 20px;
    font-weight: 300;

    &.child {
        text-align: left;
        font-size: 16px;
        color: white;
        font-weight: 300;
    }
`

const StyledBidLabelColored = styled.span`
    font-size: inherit;
    color: ${Colors.tertiary_green};
`

const StyledBidsContainer = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
    gap: 35px;
    margin-top: 100px;

    @media screen and (max-width: ${Dimensions.tabletMaxWidth}){
        grid-template-columns: auto auto;
    }

    @media screen and (max-width: ${Dimensions.mobileMaxWidth}){
        grid-template-columns: auto;
        margin-top: 10px;
    }
`

const StyledBid = styled.div`
    width: 100%;
`

const StyledBidImageWrapper = styled.div`
    width: 100%;
    height: 220px;
    overflow: hidden;
`

const StyledBidImage = styled.img`
    width: inherit;
    height: inherit;
    object-fit: cover;
    border-radius: 10px;
`

const StyledOpportunitiesWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 5px;
    margin: 40px 0;

    @media screen and (max-width: ${Dimensions.tabletMaxWidth}){
       display: block;
    }
`

const StyledOpportunityImage = styled.img`
    width: 100%;
`

const StyledOpportunityContent = styled.div`
    width: 100%;
`

const StyledStarsWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    position: relative;
    top: 0;
    left: 50%;
    transform: translate(-50%, 0);
    width: 150px;
`

const StyledStarIcon = styled(IonIcon)`
    color: gold;
    font-size: 20px;

`

const StyledOpportunityTitle = styled.p`
    font-weight: 500;
    font-size: 40px;
    margin: 20px 0;

    @media screen and (max-width: ${Dimensions.mobileMaxWidth}){
       font-size: 30px;
    }
`

const StyledUL = styled.ul`
    
`

const StyledLI = styled.li`
    color: dimgray;
    font-size: 24px;

    @media screen and (max-width: ${Dimensions.mobileMaxWidth}){
       font-size: 18px;
    }
    
`

const StyledBottomTenderWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: ${Colors.secondary_green};
    padding: 10px 15px;
    border-radius: 10px;
    margin: 30px 0;
`

const StyledBottomTenderText = styled.p`
    color: white;
    font-size: 20px;

    @media screen and (max-width: ${Dimensions.mobileMaxWidth}){
       font-size: 14px;
    }
`

const StyledBottomTenderButton = styled.button`
    background: ${Colors.tertiary_green};
    color: ${Colors.primary_black};
    width: 200px;
    padding: 10px 0;
    border-radius: 25px;
    font-size: 16px;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;

    @media screen and (max-width: ${Dimensions.mobileMaxWidth}){
       font-size: 14px;
    }
`

const StyledBottomTenderIcon = styled(IonIcon)`
    
`