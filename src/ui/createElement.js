// const createElement = (tag, className, text) => {
//     const element = document.createElement(tag);
//
//     if (className) {
//         element.classList.add(className);
//     }
//
//     if (text) {
//         element.innerHTML = text;
//     }
//
//     return element;
// };

const createElement = (property) => {
    const element = document.createElement(property.tag);

    if (property.class) {
        element.classList.add(property.class);
    }

    if (property.text) {
        element.innerHTML = property.text;
    }

    return element;
};

export default createElement