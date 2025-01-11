import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SendResponse = (response) => {
    let status=response.status;
    let message=response.message;
    toast[status](message);
};

const ShowResponse = (show=false) => {

    return (
        <>
            <ToastContainer />
        </>
    );
};

export {
    SendResponse,
    ShowResponse
}