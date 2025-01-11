import styled from "styled-components";
import Colors from "../theme/Colors";
import Dimensions from "../theme/Dimensions.js";

const Pagination = () => {

    return (
        <StyledWrapper>
            <StyledTitle>Showing <StyledTitle className="pageSize">12 tenders</StyledTitle> Per Page</StyledTitle>
            <StyledPagesWrapper>
                <StyledPage>Prev</StyledPage>
                <StyledPage className="active">1</StyledPage>
                <StyledPage>2</StyledPage>
                <StyledPage>3</StyledPage>
                <StyledPage>4</StyledPage>
                <StyledPage className="next">Next</StyledPage>
            </StyledPagesWrapper>
        </StyledWrapper>
    )
}

export default Pagination;

const StyledWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 50px 0;

    @media screen and (max-width: ${Dimensions.mobileMaxWidth}){
       display: block;
       margin: 25px 0;
    }
` 

const StyledTitle = styled.label`
    font-size: 20px;

    &.pageSize {
        color: ${Colors.secondary_green}
    }
`

const StyledPagesWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;

    @media screen and (max-width: ${Dimensions.mobileMaxWidth}){
       margin: 20px 0;
    }
`

const StyledPage = styled.button`
    width: 55px;
    background: transparent;
    font-size: 20px;
    border: 1px solid ${Colors.divider};
    border-radius: 5px;
    padding: 5px;

    &.active {
        background: ${Colors.secondary_green}20;
        border: 1px solid ${Colors.secondary_green};
        color: black;
    }

    &.next {
        background: ${Colors.secondary_green};
        color: white;
    }

    @media screen and (max-width: ${Dimensions.mobileMaxWidth}){
       width: 50px;
       font-size: 16px;
    }
`