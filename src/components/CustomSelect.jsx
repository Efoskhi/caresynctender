import React from "react";
import styled from "styled-components";
import { IonIcon } from "@ionic/react";
import { search, chevronDown, close, listOutline, gridOutline } from "ionicons/icons";
import Colors from "../theme/Colors";
import Dimensions from "../theme/Dimensions";
import useCustomInput from "../hooks/useCustomInput";


const CustomSelect = ({ label, field, filters, setFilters }) => {
    const [ openSelect, setOpenSelect ] = React.useState(null);
    const wrapperRef = React.useRef(null);


    const dashboardHooks = useCustomInput({ setFilters });

    const {
		tenders,
		tenderFilters,
		isFetchTenderFailed,
		selectedWrapperRefs,
		selectContentRefs,
		scrollPositions,
		selectSearches,
		inputRefs,
        handleSelect,
		handleRemoveSelectedOption,
        handleInput,
		paginate,
		handleSelectSearch,
		handleFocus
	} = dashboardHooks;

    
    const selectedOptions = filters[field];
    const options = tenderFilters[field];
    const isVisible = openSelect === label;

  
    const handleClick = () => {
        setOpenSelect(isVisible ? null : label);
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
        <StyledInputWrapper onClick={handleClick} ref={wrapperRef}>
            <StyledButton>
                <StyledButtonLabel>{ selectedOptions.join(", ") || label }</StyledButtonLabel> 
                <StyledIonIcon icon={chevronDown}/>                
            </StyledButton>
            <StyledSelectWrapper className={ isVisible ? "active" : "" }>
                <StyledInput 
                    placeholder={"Search " + label} 
                    className="select" 
                    onClick={(e) => e.stopPropagation()}
                    onChange={ e => handleSelectSearch(field, e) }
                />
                <StyledSelectedWrapper
                >
                    {selectedOptions.map((item, key) => (
                        <StyledSelectItem className="selected" key={key} onClick={(e) => e.stopPropagation()}>
                            {item} 
                            <StyledIonIcon 
                                icon={close} 
                                className="close"
                                onClick={ e => handleRemoveSelectedOption(field, item, e) }
                            /> 
                        </StyledSelectItem>
                    ))}
                </StyledSelectedWrapper>
                <StyledSelectContent
                >
                    {options.map((item, key) => (
                        <StyledSelectItem 
                            className={selectedOptions.includes(item) ? "active" : ""} 
                            key={key}
                            onClick={ e => handleSelect(field, item, e) }
                        >
                            { item }
                        </StyledSelectItem>
                    ))}
                </StyledSelectContent>
            </StyledSelectWrapper>
        </StyledInputWrapper>
       
    )
}

export default CustomSelect;

export const StyledInputWrapper = styled.div`
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

export const StyledInput = styled.input`
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

const StyledButtonLabel = styled.span`
    width: 20px;
    flex-grow: 1;
    overflow: hidden;
    cursor: pointer;
    font-size: 16px;
    color: ${Colors.secondary_black};
    text-overflow: ellipsis;
    white-space: nowrap;

    @media screen and (max-width: ${Dimensions.mobileMaxWidth}){
        width: 100% !important;
    }
`


export const StyledIonIcon = styled(IonIcon)`
    color: black;
    font-size: 25px;
    cursor: pointer;

    &.close {
        font-size: inherit;
        color: inherit;
        min-width: 20px;
        margin-top: 3px;
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
    border-bottom: 3px solid ${Colors.divider};
    max-height: 200px;
    overflow: auto;
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
        align-items: flex-start;
        justify-content: space-between;
        width: auto;
        color: ${Colors.secondary_green};
        background: ${Colors.secondary_green}20;
    }

`

const StyledSelectContent = styled.div`
    max-height: 200px;
    overflow-y: auto;
    transition: 2s;
`
