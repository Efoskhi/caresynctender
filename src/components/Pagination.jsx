import styled from "styled-components";
import Colors from "../theme/Colors";
import Dimensions from "../theme/Dimensions.js";

const Pagination = ({ data, paginate }) => {
    const { page, totalPages, totalResult, pageSize } = data;

    const generatePageNumbers = () => {
        const pages = [];
        const range = 2; // Number of pages to show before and after current page

        // Always show first page (1) and last page (totalPages)
        if (totalPages > 1 && page > 1) pages.push(1);

        // Display pages around the current page
        if (page - range > 2) {
            pages.push('...'); // Add ellipsis when there are skipped pages
        }

        for (let i = Math.max(2, page - range); i < page; i++) {
            pages.push(i);
        }

        pages.push(page); // Always show current page

        for (let i = page + 1; i <= Math.min(totalPages - 1, page + range); i++) {
            pages.push(i);
        }

        if (page + range < totalPages - 1) {
            pages.push('...'); // Add ellipsis when there are skipped pages
        }

        // Always show last page (totalPages) if it's not already included
        if (totalPages > 1 && pages[pages.length - 1] !== totalPages) {
            pages.push(totalPages);
        }

        return pages;
    };

    const handlePrev = () => {
        if (page > 1) {
            paginate(page - 1);
        }
    };

    const handleNext = () => {
        if (page < totalPages) {
            paginate(page + 1);
        }
    };

    const handlePaginate = () => {

    }

    const pageNumbers = generatePageNumbers();

    return (
        <StyledWrapper>
            <StyledTitle>
                Showing <StyledPageSize>{pageSize} tenders</StyledPageSize> per page
            </StyledTitle>
            <StyledPagesWrapper>
                <StyledPage onClick={handlePrev} disabled={page === 1}>
                    Prev
                </StyledPage>
                {pageNumbers.map((pageNumber, index) =>
                    pageNumber === '...' ? (
                        <StyledPage key={index} className="dots" disabled={true}>
                            ...
                        </StyledPage>
                    ) : (
                        <StyledPage
                            key={index}
                            className={pageNumber === page ? 'active' : ''}
                            onClick={() => paginate(pageNumber)}
                        >
                            {pageNumber}
                        </StyledPage>
                    )
                )}
                <StyledPage onClick={handleNext} disabled={page === totalPages}>
                    Next
                </StyledPage>
            </StyledPagesWrapper>
        </StyledWrapper>
    );
};

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
`

const StyledPageSize = styled.span`
    color: ${Colors.secondary_green}
`

const StyledPagesWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;

    @media screen and (max-width: ${Dimensions.mobileMaxWidth}){
        margin: 20px 0;
        overflow-x: auto;

        // flex-wrap: wrap;

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