import React from "react";
import axios from "axios";
import { base_url } from "../constants/urls";

const useCustomInput = ({ setFilters, shouldGetTenderFilters = true }) => {
	const [ tenderFilters, setTenderFilters ] = React.useState({
		title: [],
		regions: [],
		contracts: []
	});
	const tenderFiltersRef = React.useRef({
		title: [],
		regions: [],
		contracts: []
	});
	const searchInput = React.useRef("");

	const handleSelect = (field, value, event) => {
		if(event) event.stopPropagation();

		setFilters((prevFilter) => {
			if (!prevFilter[field].includes(value)) {
				return {
					...prevFilter,
					[field]: [...prevFilter[field], value],
				};
			}
			return prevFilter;
		});
	}

	const handleRemoveSelectedOption = (field, value, event) => {
		if(event) event.stopPropagation();

		setFilters(prev => ({
			...prev,
			[field]: prev[field].filter(item => item !== value)
		}));	
	}

    const handleInput = (e) => {
        searchInput.current = e.target.value;
    }

	const handleSearch = () => {
		setFilters(prev => ({
            ...prev,
            description: searchInput.current
        }))
	}

	const handleSelectSearch = (field, event) => {
        const searchValue = event.target.value.toLowerCase(); 


        setTenderFilters((prevFilters) => {
			let filteredValues;

			if(searchValue){
				filteredValues = prevFilters[field].filter(item =>
					item.toLowerCase().includes(searchValue)
				);
			} else {
				filteredValues = tenderFiltersRef.current[field];
			}
			
            return {
                ...prevFilters,
                [field]: filteredValues
            };
        });
    }
  

	const getTenderFilters = async () => {
		try {
			const { data } = await axios.get(`${base_url}/api/tender/retrieve/filters`);

			if(data.status === "success"){
				let filters = data.data;
				tenderFiltersRef.current = filters;
				setTenderFilters(filters);
			}
		} catch(e) {
			console.log("getTenderFilters", e)
		}
	}

	React.useEffect(() => {
		if(shouldGetTenderFilters) getTenderFilters();
	}, [])


	return {
		tenderFilters,
        handleSelect,
		handleRemoveSelectedOption,
        handleInput,
		handleSelectSearch,
		handleSearch
	};
};

export default useCustomInput;
