import React from "react";

const useDashboard = () => {
	const [ filter, setFilter ] = React.useState({
		input: "",
		type: [],
		regions: [],
		contracts: [],
	});

	const handleSelect = (field, value) => {
		setFilter((prevFilter) => {
			if (!prevFilter[field].includes(value)) {
				return {
					...prevFilter,
					[field]: [...prevFilter[field], value],
				};
			}
			return prevFilter;
		});
	}

    const handleInput = (value) => {
        setFilter(prev => ({
            ...prev,
            input: value
        }))
    }

	return {
		filter,
        handleSelect,
        handleInput
	};
};

export default useDashboard;
