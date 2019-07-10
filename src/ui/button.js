import createElement from './createElement.js';


const button = (className, text, idButton) => {
    const button = createElement('button', className, text);
    button.type = "button";
    button.id = idButton;
    return button;
};

export default button;
