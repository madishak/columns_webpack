const createElement = (tag, className, text) => {
    const element = document.createElement(tag);

    if (className) {
        element.classList.add(className);
    }

    if (text) {
        element.innerHTML = text;
    }

    return element;
};

export default createElement