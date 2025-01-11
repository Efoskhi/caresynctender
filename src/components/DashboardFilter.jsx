import React from "react";
import styled from "styled-components";
import { IonIcon } from "@ionic/react";
import { search, chevronDown, close, listOutline, gridOutline } from "ionicons/icons";
import Colors from "../theme/Colors";
import Dimensions from "../theme/Dimensions";
import Tender from "./Tender";
import Pagination from "./Pagination";

const DashboardFilter = () => {
    const [ openSelect, setOpenSelect ] = React.useState(null);
    const [ tenderStyle, setTenderStyle ] = React.useState("grid");
    const wrapperRef = React.useRef(null);

    const CustomSelect = ({ label, options = [], selectedOptions = [] }) => {
  
        const isVisible = openSelect === label;
      
        const handleClick = () => {
            setOpenSelect(isVisible ? null : label);
        }

        return (
            <StyledInputWrapper onClick={handleClick}>
                <StyledButton>
                    {label}  
                    <StyledIonIcon icon={chevronDown}/>                
                </StyledButton>
                <StyledSelectWrapper className={ isVisible ? "active" : "" }>
                    <StyledInput 
                        placeholder={"Search " + label} 
                        className="select" 
                        onClick={(e) => e.stopPropagation()}
                    />
                    <StyledSelectedWrapper>
                        {selectedOptions.map((item, key) => (
                            <StyledSelectItem className="selected" key={key}>{item} <StyledIonIcon icon={close} className="close"/> </StyledSelectItem>
                        ))}
                    </StyledSelectedWrapper>
                    <StyledSelectContent>
                        {options.map((item, key) => (
                            <StyledSelectItem className="active"  key={key}>{ item }</StyledSelectItem>
                        ))}
                    </StyledSelectContent>
                </StyledSelectWrapper>
            </StyledInputWrapper>
           
        )
    }

    React.useEffect(() => {
        const handleClickOutside = (event) => {
            const classNames = event.target.className;
            if (wrapperRef.current && !wrapperRef.current.contains(event.target) && !classNames.includes("select")) {
                setOpenSelect(null);
            }
        }
    
        document.addEventListener('mousedown', handleClickOutside);
    
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        }
      }, [])

    return (
        <StyledWrapper>
            <StyledFilterWrapper ref={wrapperRef}>
                <StyledInputWrapper className="input">
                    <StyledInput placeholder="Search key words"/>
                    <StyledIonIcon icon={search}/>
                </StyledInputWrapper>

                <CustomSelect 
                    label="Type" 
                />
                <CustomSelect 
                    label="Regions" 
                />
                <CustomSelect 
                    label="Contracts" 
                />
                <StyledIconWrapper>
                    <StyledIcon 
                        icon={ listOutline } 
                        className={ tenderStyle === "list" ? "active" : "" }
                        onClick={ () => setTenderStyle("list") }
                    />
                    <StyledIcon 
                        icon={ gridOutline } 
                        className={ tenderStyle === "grid" ? "active" : "" }
                        onClick={ () => setTenderStyle("grid") }
                    />
                </StyledIconWrapper>
            </StyledFilterWrapper>
            <StyledTenderWrapper className={ tenderStyle }>
                <Tender tenderStyle={tenderStyle}/>
                <Tender tenderStyle={tenderStyle}/>
                <Tender tenderStyle={tenderStyle}/>
                <Tender tenderStyle={tenderStyle}/>
                <Tender tenderStyle={tenderStyle}/>
                <Tender tenderStyle={tenderStyle}/>
                <Tender tenderStyle={tenderStyle}/>
                <Tender tenderStyle={tenderStyle}/>
            </StyledTenderWrapper>
            <Pagination/>
        </StyledWrapper>
    )
}

export default DashboardFilter;


const StyledWrapper = styled.div`
    margin: 20px 0;
    // flex-wrap: wrap;
`

const StyledFilterWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    margin: 40px 0;
    flex-wrap: wrap; 

    @media screen and (max-width: ${Dimensions.mobileMaxWidth}){
        display: block;
        margin: 20px 0;
    }
`


const StyledIconWrapper = styled.div`
    display: flex;
    gap: 10px;

    @media screen and (max-width: ${Dimensions.mobileMaxWidth}){
       display: none;
    }
`

const StyledIcon = styled(IonIcon)`
    padding: 12px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid ${Colors.secondary_green};
    color: ${Colors.secondary_green};
    cursor: pointer;
    font-size: 24px;

    &.active {
        background: ${Colors.secondary_green};
        color: white;
    }

    &:hover {
        opacity: 0.7;
    }
`

const StyledInputWrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 20px;
    padding: 10px;
    border: 1px solid rgba(150, 150, 150, 0.3);
    width: 20%;

    &.input {
        background: #eee;
        width: 30%;
    }

    @media screen and (max-width: ${Dimensions.mobileMaxWidth}){
        width: 100% !important;
        margin: 10px 0; 
    }
`

const StyledInput = styled.input`
    background: transparent;
    width: 100%;
    font-size: 16px;

    &.select {
        padding: 8px 10px;
        border: 1px solid rgba(150, 150, 150, 0.3);
        border-radius: 15px;
        margin-bottom: 10px;
    }
`

const StyledIonIcon = styled(IonIcon)`
    color: black;
    font-size: 25px;

    &.close {
        font-size: inherit;
        color: inherit;
    }
`
const StyledButton = styled.button`
    width: 250px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: transparent;
    font-size: 16px;
    color: ${Colors.secondary_black};

    @media screen and (max-width: ${Dimensions.mobileMaxWidth}){
        width: 100% !important;
    }
`

const StyledSelectWrapper = styled.div`
    position: absolute;
    left: 0;
    top: 50px;
    width: 100%;
    background: white;
    box-shadow: 0px 4px 8px rgba(150, 150, 150, 0.3), 0px 0px 15px rgba(150, 150, 150, 0.4);
    padding: 10px;
    border-radius: 10px;
    display: none;
    z-index: 5;

    &.active {
        display: block;
    }
`

const StyledSelectedWrapper = styled.div`
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
`

const StyledSelectItem = styled.button`
    display: block;
    margin: 5px 0;
    padding: 5px 10px;
    width: 100%;
    color: ${Colors.primary_black};
    text-align: left;
    background: transparent;
    
    &:hover {
        background: ${Colors.secondary_green}20;
        color: ${Colors.secondary_green};
    }

    &.active {
        color: ${Colors.secondary_green};
        background: ${Colors.secondary_green}20;
    }

    &.selected {
        display: flex;
        gap: 10px;
        align-items: center;
        justify-content: space-between;
        width: auto;
        color: ${Colors.secondary_green};
        background: ${Colors.secondary_green}20;
    }

`


const StyledSelectContent = styled.div`
    max-height: 200px;
    overflow-y: auto;
`


const StyledTenderWrapper = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
    gap: 25px;

    &.list { 
        display: block;
        margin: 10px 0;
    }

    @media screen and (max-width: ${Dimensions.tabletMaxWidth}){
        grid-template-columns: auto auto;
    }

    @media screen and (max-width: ${Dimensions.mobileMaxWidth}){
       grid-template-columns: auto;
    }
`