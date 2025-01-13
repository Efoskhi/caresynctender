import React from "react";
import axios from "axios";
import { base_url } from "../constants/urls";

const useDashboard = () => {
	const [ filters, setFilters ] = React.useState({
		page: 1,
		description: "",
		title: [],
		regions: [],
		contracts: [],
	});

	const [ tenders, setTenders ] = React.useState([]);
	const [ isFetchTenderFailed, setFetchTenderFailed ] = React.useState(false);
	const [ isLoadingTenders, setLoadingTenders ] = React.useState(true);
	const [ pagination, setPagintion ] = React.useState({});
	const styledWrapperRef = React.useRef();
	const isPaginate = React.useRef(false);

    
	const paginate = (page) => {
		isPaginate.current = true;
		setFilters(prev => ({
			...prev,
			page
		}))
	}

	const getAllTenders = async () => {
		setLoadingTenders(true);
		try {
			const { data } = await axios.post(`${base_url}/api/tender/retrieve`, filters);
			 
			if(data.status === "success"){
				setTenders(data.data.tenders);
				setPagintion(data.data.pagination)
			} else {
				setFetchTenderFailed(true)
			}

			if (styledWrapperRef.current && isPaginate.current) {
				styledWrapperRef.current.scrollIntoView({
					behavior: 'smooth',
					block: 'start',
				});
			}
			isPaginate.current = false;

			setLoadingTenders(false);
		} catch(e) {
			console.log("getAllTenders", e)
		}
	}

	React.useEffect(() => {
		getAllTenders();
	}, [filters])


	return {
		tenders,
		isFetchTenderFailed,
		filters,
		isLoadingTenders,
		pagination,
		styledWrapperRef,
		setFilters,
		paginate,
		getAllTenders,
	};
};

export default useDashboard;
