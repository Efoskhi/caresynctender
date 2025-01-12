const FormatDate = (dateString) => {
    try {
        const date = new Date(dateString);
        const options = { day: 'numeric', month: 'long', year: 'numeric' };
        return new Intl.DateTimeFormat('en-GB', options).format(date);
    } catch(e) {

    }
};

export default FormatDate;