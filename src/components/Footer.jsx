import styled from "styled-components";
import { IonIcon } from "@ionic/react";
import { mail } from "ionicons/icons";
import Colors from "../theme/Colors";
import Dimensions from "../theme/Dimensions";
import logo from "../assets/logo.png";

const Footer = () => {

    return (
        <StyledWrapper>
            <StyledFooterContent>
                <StyledContentWrapper>
                    <StyledImage src={ logo }/>
                    <StyledInputLabel>Would you like to receive update from CareSync Experts?</StyledInputLabel>
                    <StyledInputWrapper>
                        <StyledInputBox>
                            <StyledIcon icon={mail}/>
                            <StyledInput placeholder="Enter your email"/>
                        </StyledInputBox>
                        <StyledButton>Subscribe</StyledButton>
                    </StyledInputWrapper>
                </StyledContentWrapper>
                <StyledContentWrapper>
                    <StyledTitle>Our Packages</StyledTitle>
                    <StyledLink>Domicilary Care</StyledLink>
                    <StyledLink>Supporting Services</StyledLink>
                    <StyledLink>Temporary Staff Solutions</StyledLink>
                    <StyledLink>Combined Care Agency</StyledLink>
                </StyledContentWrapper>
                <StyledContentWrapper>
                    <StyledTitle>Quick Links</StyledTitle>
                    <StyledLink>FAQs</StyledLink>
                    <StyledLink>Success Stories</StyledLink>
                    <StyledLink>Download Our Brochures</StyledLink>
                </StyledContentWrapper>
                <StyledContentWrapper>
                    <StyledTitle>Stay Connected</StyledTitle>
                    <StyledLink>+44 333 577 0877</StyledLink>
                    <StyledLink>hello@caresyncexperts.co.uk</StyledLink>
                    <StyledLink>Temporary Staff Solutions</StyledLink>
                    <StyledLink>Combined Care Agency</StyledLink>
                </StyledContentWrapper>
            </StyledFooterContent>
        </StyledWrapper>
    )
}

export default Footer;

const StyledWrapper = styled.div`
    background: #004558;
    padding: 40px;

    @media screen and (max-width: ${Dimensions.mobileMaxWidth}){
       padding: 20px;
    }
`

const StyledFooterContent = styled.div`
    display: grid;
    grid-template-columns: auto auto auto auto;
    gap: 10px;

    @media screen and (max-width: ${Dimensions.tabletMaxWidth}){
        grid-template-columns: auto auto;
    }

    @media screen and (max-width: ${Dimensions.mobileMaxWidth}){
       grid-template-columns: auto;
    }
`

const StyledContentWrapper = styled.div`

`

const StyledImage = styled.img`
    width: 100px;
`

const StyledInputLabel = styled.p`
    color: white;
    font-size: 16px;
`

const StyledInputWrapper = styled.div`
    display: flex;
    gap: 5px;
    margin: 15px 0;
`

const StyledInputBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 5px;
    background: white;
    padding: 10px;
    border-radius: 10px;
`

const StyledIcon = styled(IonIcon)`
    color: dimgrey;
`

const StyledInput = styled.input`
    background: transparent;
`

const StyledButton = styled.button`
    background: ${Colors.secondary_green};
    color: white;
    width: 100px;
    border-radius: 10px;
`

const StyledTitle = styled.h1`
    color: ${Colors.tertiary_green};
    font-size: 18px;
`

const StyledLink = styled.a`
    text-decoration: none;
    color: white;
    font-size: 16px;
    display: block;
    margin: 5px 0;
`