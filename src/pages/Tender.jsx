import styled from "styled-components";
import { IonIcon } from "@ionic/react";
import { chevronBack } from "ionicons/icons";
import { Link, useNavigate } from "react-router-dom";

import Colors from "../theme/Colors";
import Dimensions from "../theme/Dimensions";
import fileImage from "../assets/file.png";
import locationImage from "../assets/location.png";
import userImage from "../assets/user.png";
import clockimage from "../assets/clock.png";

const Tender = () => {
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    }

    return (
        <StyledWrapper>
            <StyledHeaderWrapper>
                <StyledBackWrapper>
                    <StyledIcon icon={chevronBack}/>
                    <StyledLink onClick={goBack}>Go Back</StyledLink>
                </StyledBackWrapper>
                <StyledTenderText>Tender Details</StyledTenderText>
            </StyledHeaderWrapper>
            <StyledContainer>
                <StyledTitle>Supported Accommodation for Young People</StyledTitle>

                <StyledPageContent>
                    <StyledContentWrapper>
                        <StyledContentHeader>
                            <StyledHeaderLabel>OFSTED</StyledHeaderLabel>
                            <StyledHeaderTitle>Contract Value/Annum: <StyledBold>£100,000</StyledBold></StyledHeaderTitle>
                        </StyledContentHeader>
                        <StyledHeaderTitle>Seeking qualified providers for supported accommodation services.</StyledHeaderTitle>
                        <StyledHighlightsWrapper>
                            <StyledBold>Key Highlights</StyledBold>
                            <StyledUL>
                                <StyledLI>Scope: OFSTED</StyledLI>
                                <StyledLI>Coverage: West Midlands</StyledLI>
                                <StyledLI>Contract Term: 25 December 2024</StyledLI>
                                <StyledLI>Potential Value: £100,000</StyledLI>
                            </StyledUL>
                        </StyledHighlightsWrapper>

                        <StyledItemWrapper>
                            <StyledItem>
                                <StyledImage src={locationImage }/>
                                <StyledItemTitle>Region: </StyledItemTitle>
                                <StyledItemLabel>West Midlands</StyledItemLabel>
                            </StyledItem>
                            <StyledItem>
                                <StyledImage src={userImage }/>
                                <StyledItemTitle>Contracting Authority: </StyledItemTitle>
                                <StyledItemLabel>Stoke on trent</StyledItemLabel>
                            </StyledItem>
                            <StyledItem>
                                <StyledImage src={fileImage }/>
                                <StyledItemTitle>Requirement: </StyledItemTitle>
                                <StyledItemLabel>OFSTED</StyledItemLabel>
                            </StyledItem>
                            <StyledItem>
                                <StyledImage src={clockimage }/>
                                <StyledItemTitle>Closing Date: </StyledItemTitle>
                                <StyledItemLabel>25 December 2024</StyledItemLabel>
                            </StyledItem>
                        </StyledItemWrapper>

                        <StyledButton>Show Interest</StyledButton>
                    </StyledContentWrapper>

                    <StyledContentWrapper>
                        <StyledBold className="colored">Bid Requirement</StyledBold>
                        <StyledHeaderTitle>To express interest in this tender, bidders must meet the following requirements:</StyledHeaderTitle>
                        <StyledOL>
                            <StyledLI className="ol">Provide a CQC Registration Certificate.</StyledLI>
                            <StyledLI className="ol">Submit a safeguarding policy.</StyledLI>
                            <StyledLI className="ol">
                                Demonstrate financial stability, with supporting documents such as:
                                <StyledUL>
                                    <StyledLI>Audited accounts or turnover statements.</StyledLI>
                                    <StyledLI>Profit and loss statements and balance sheets.</StyledLI>
                                </StyledUL>
                            </StyledLI>
                            <StyledLI className="ol">
                                Proof of insurance coverage, including:
                                <StyledUL>
                                    <StyledLI>Employer's Liability: £10m</StyledLI>
                                    <StyledLI>Public Liability: £10m</StyledLI>
                                    <StyledLI>Professional Indemnity: £5m</StyledLI>
                                </StyledUL>
                            </StyledLI>
                            <StyledLI className="ol">Showcase technical expertise through examples of similar contracts.</StyledLI>
                        </StyledOL>

                        <StyledContactUsWrapper>
                            <div>
                                <StyledContactUsTitle>For a full list of requirements,</StyledContactUsTitle>
                                <StyledContactUsLabel>contact us for tailored guidance</StyledContactUsLabel>
                            </div>
                            <StyledButton className="contactUs">Contact Us</StyledButton>
                        </StyledContactUsWrapper>
                    </StyledContentWrapper>
                </StyledPageContent>
            </StyledContainer>
        </StyledWrapper>
    )
}

export default Tender;

const StyledWrapper = styled.div`

`

const StyledHeaderWrapper = styled.div`
    padding: 40px;
    background: ${Colors.secondary_green};
    display: flex;
    align-items: center;

    @media screen and (max-width: ${Dimensions.mobileMaxWidth}){
       display: block;
       padding: 30px 10px;
    }
`

const StyledContainer = styled.div`
    margin: 40px;

    @media screen and (max-width: ${Dimensions.tabletMaxWidth}){
       margin: 20px;
    }
`

const StyledPageContent = styled.div`
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    gap: 50px;

    @media screen and (max-width: ${Dimensions.tabletMaxWidth}){
       display: block;
    }
`

const StyledBackWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    color: white;
    font-size: 20px;
`

const StyledIcon = styled(IonIcon)`
`

const StyledLink = styled(Link)`
    color: white;
    text-decoration: none;
`

const StyledTenderText = styled.h1`
    font-weight: 500;
    text-align: center;
    color: white;
    flex: 1;
    font-size: 42px;

    @media screen and (max-width: ${Dimensions.mobileMaxWidth}){
       font-size: 30px;
    }
`

const StyledTitle = styled.h1`
    margin: 30px 0;
    font-size: 30px;
`

const StyledContentWrapper = styled.div`
    margin-bottom: 40px;
`
const StyledContentHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
`

const StyledHeaderLabel = styled.span`
    background: ${Colors.secondary_green}20;
    color: ${Colors.secondary_green};
    padding: 5px;
    border-radius: 5px;
    font-size: 14px;
`

const StyledHeaderTitle = styled.p`
    color: ${Colors.secondary_black}
`

const StyledBold = styled.b`
    color: black;

    &.colored {
        color: ${Colors.secondary_green}
    }
`

const StyledHighlightsWrapper = styled.div`
    margin: 40px 0;
`

const StyledUL = styled.ul`
    margin-left: 20px;
`

const StyledLI = styled.li`
    color: ${Colors.secondary_black};
    margin: 15px 0;

    &.ol::marker {
        color: ${Colors.secondary_green};
        font-weight: 500;
        margin-right: 10px;
    }

    &.ol {
        padding-left: 10px;
    }
`

const StyledItemWrapper = styled.div`
    margin: 15px 20px;
`

const StyledItem = styled.div`
    display: flex;
    align-items: center;
    // justify-content: space-between;
    gap: 10px;
    margin: 15px 0;
`

const StyledItemTitle = styled.p`
    color: dimgrey;
    font-size: 16px;
`

const StyledItemLabel = styled.p`
    font-size: 16px;
`

const StyledImage = styled.img`
    display: block;
    width: 20px;
    height: 20px;
`

const StyledButton = styled.button`
    width: 100%;
    background: ${Colors.secondary_green};
    color: white;
    font-weight: 500;
    border-radius: 20px;
    padding: 10px;
    margin-top: 20px;
    font-size: 16px;

    &.contactUs {
        width: 100px;
        margin-top: 0;

        @media screen and (max-width: ${Dimensions.mobileMaxWidth}){
            font-size: 12px;
        }
    }
`

const StyledOL = styled.ol`
    margin-left: 15px;
`

const StyledContactUsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    border-radius: 5px;
    background: ${Colors.primary_green};
`

const StyledContactUsTitle = styled.p`
    font-weight: 600;
    font-size: 16px;
    color: white;
    margin-bottom: 5px;
`

const StyledContactUsLabel = styled.p`
    font-weight: 500;
    font-size: 14px;
    color: white;
`