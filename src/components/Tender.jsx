import styled from "styled-components";
import { Link } from "react-router-dom";
import Colors from "../theme/Colors";
import Dimensions from "../theme/Dimensions";
import fileImage from "../assets/file.png";
import locationImage from "../assets/location.png";
import userImage from "../assets/user.png";
import clockimage from "../assets/clock.png";

const Tender = ({ tenderStyle }) => {

    return (
        <StyledWrapper className={ tenderStyle }>
            <StyledLabel>OFSTED</StyledLabel>
            <StyledTitle>Supported Accomodation foy Yound People 1</StyledTitle>
            <StyledContentWrapper className={ tenderStyle }>
                <StyledItemWrapper className={ tenderStyle }>
                    <StyledItem>
                        <StyledImage src={locationImage }/>
                        <StyledItemTitle>Region: </StyledItemTitle>
                        <StyledItemLabel>West Midlands</StyledItemLabel>
                    </StyledItem>
                    <StyledItem>
                        <StyledImage src={userImage }/>
                        <StyledItemTitle>Contractor: </StyledItemTitle>
                        <StyledItemLabel>Stoke on trent</StyledItemLabel>
                    </StyledItem>
                    <StyledItem>
                        <StyledImage src={fileImage }/>
                        <StyledItemTitle>Requirement: </StyledItemTitle>
                        <StyledItemLabel>OFSTED</StyledItemLabel>
                    </StyledItem>
                    <StyledItem>
                        <StyledImage src={clockimage }/>
                        <StyledItemTitle>Closes In: </StyledItemTitle>
                        <StyledItemLabel>25 December 2024</StyledItemLabel>
                    </StyledItem>
                </StyledItemWrapper>
                <div>
                    <StyledItemTitle>Value</StyledItemTitle>
                    <StyledTitle className="amount">$34,346</StyledTitle>
                </div>
            </StyledContentWrapper>
            
            <StyledButtons className={ tenderStyle }>
                <StyledLink className="primary" to="tender/1">Show Interest</StyledLink>
                <StyledButton>More Details</StyledButton>
            </StyledButtons>
        </StyledWrapper>
    )
}

export default Tender;

const StyledWrapper = styled.div`
    border: 1px solid rgba(150, 150, 150, 0.3);
    padding: 15px;
    border-radius: 10px;

    &.list {
        border-left: 3px solid ${Colors.secondary_green};
        margin: 20px 0;
    }

`

const StyledLabel = styled.label`
    background: ${Colors.secondary_green}20;
    color: ${Colors.secondary_green};
    font-size: 14px;
    padding: 0 10px;
`

const StyledTitle = styled.p`
    margin: 10px 0;
    font-size: 18px;
    font-weight: 500;

    &.amount {
        font-size: 24px;
        font-weight: 600;
        margin: 5px 0;
    }
`

const StyledContentWrapper = styled.div`
    &.list {
        display: flex;
        justify-content: space-between;
    }
`

const StyledItemWrapper = styled.div`
    margin: 15px 0;

    &.list {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 10px;
    }
`

const StyledItem = styled.div`
    display: flex;
    align-items: center;
    // justify-content: space-between;
    gap: 10px;
    margin: 10px 0;
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

const StyledButtons = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;

    &.list {
        width: 40%;
    }
`

const StyledButton = styled.button`
    width: 48%;
    border-radius: 25px;
    padding: 10px 15px;
    border: 1px solid rgba(150, 150, 150, 0.3);
    background: transparent;
    font-size: 16px;
    text-align: center;
    text-decoration: none;

    &.primary {
        background: ${Colors.secondary_green};
        color: white;
    }

    &:hover {
        opacity: 0.7;
    }

    @media screen and (max-width: ${Dimensions.mobileMaxWidth}){
       font-size: 14px;
    }
`

const StyledLink = styled(StyledButton).attrs({ as: Link })`
   
`;