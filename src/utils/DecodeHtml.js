const decodeHtml = (encodedStr) => {
    const textArea = document.createElement('textarea');
    textArea.innerHTML = encodedStr;
    return textArea.value;
};

export default decodeHtml;