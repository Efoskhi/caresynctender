import React from "react";
import styled from "styled-components";
import { IonIcon } from "@ionic/react";
import { search, chevronDown, close, listOutline, gridOutline } from "ionicons/icons";
import Colors from "../theme/Colors";
import Dimensions from "../theme/Dimensions";
import useCustomInput from "../hooks/useCustomInput";

import CustomSelect, { StyledInputWrapper, StyledIonIcon, StyledInput } from "./CustomSelect";

const CustomInput = ({ filters, setFilters }) => {

    const { handleInput, handleSearch, tenderFilters } = useCustomInput({ setFilters })

    return (
        <>
            <StyledInputWrapper className="input">
                <StyledInput placeholder="Search key words" onChange={handleInput}/>
                <StyledIonIcon icon={search} onClick={handleSearch}/>
            </StyledInputWrapper>

            <CustomSelect 
                label="Type"
                field="title"
                filters={filters}
                setFilters={setFilters}
                tenderFilters={tenderFilters}
            />
            <CustomSelect 
                label="Regions" 
                field="regions"
                filters={filters}
                setFilters={setFilters}
                tenderFilters={tenderFilters}
            />
            <CustomSelect 
                label="Contracts" 
                field="contracts"
                filters={filters}
                setFilters={setFilters}
                tenderFilters={tenderFilters}
            />
        </>    
    )
}

export default CustomInput;