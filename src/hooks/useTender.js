import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { base_url } from "../constants/urls";


const useTender = () => {
    const [ tenderDetails, setTenderDetails ] = React.useState({});
    const [ isLoading, setIsLoading ] = React.useState(true);
    const [ isError, setIsError ] = React.useState(false);

    const { id } = useParams();

    const getTenderDetails = async () => {
        try {
            const { data } = await axios.get(`${base_url}/api/tender/retrieve/${id}`);
            if(data.status === "success"){
                setTenderDetails(data.data);
            } else {
                setIsError(true);
            }
            setIsLoading(false);
        } catch(e){
            setIsLoading(false);
            setIsError(true);
        }
    }

    React.useEffect(() => {
        getTenderDetails()
    }, []);

    return {
        tenderDetails,
        isLoading,
        isError
    }
}

export default useTender;