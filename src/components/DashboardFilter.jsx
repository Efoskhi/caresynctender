import React from "react";
import styled from "styled-components";
import { IonIcon } from "@ionic/react";
import { search, chevronDown, close, listOutline, gridOutline } from "ionicons/icons";
import Colors from "../theme/Colors";
import Dimensions from "../theme/Dimensions";
import Tender from "./Tender";
import Pagination from "./Pagination";
import useDashboard from "../hooks/useDashboard";
import CustomInput from "./CustomInput";
import DashboardSkeletonLoading from "./DashboardSkeletonLoading";

const DashboardFilter = () => {
    const [ tenderStyle, setTenderStyle ] = React.useState("grid");

    const dashboardHooks = useDashboard();

    const {
		filters,
		tenders,
		isLoadingTenders,
		pagination,
        styledWrapperRef,
		paginate,
        setFilters,
        getAllTenders,
	} = dashboardHooks;

    

    return (
        <StyledWrapper ref={styledWrapperRef}>
            <StyledFilterWrapper >
                <CustomInput
                    filters={filters}
                    setFilters={setFilters}
                    getAllTenders={getAllTenders}
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
                {isLoadingTenders && 
                    <>
                        <DashboardSkeletonLoading/>
                        <DashboardSkeletonLoading/>
                        <DashboardSkeletonLoading/>
                    </>
                }
                {!isLoadingTenders && tenders.map((item, key) => (
                    <Tender 
                        data={ item }
                        index={ key }
                        tenderStyle={tenderStyle}
                    />
                ))}                
            </StyledTenderWrapper>
            <Pagination 
                data={pagination}
                paginate={paginate}
            />
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

    @media screen and (max-width: ${Dimensions.tabletMaxWidth}){
        flex-wrap: wrap; 
    }

    @media screen and (max-width: ${Dimensions.mobileMaxWidth}){
        display: block;
        margin: 20px 0;
        flex-wrap: wrap; 
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
`

const StyledIonIcon = styled(IonIcon)`
    color: black;
    font-size: 25px;
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
