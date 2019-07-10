import createElement from './createElement.js';


const inputText = (text, className, idInp, placeholder) => {
    const input = createElement('input', className, text);
    input.type = "text";
    input.id = idInp;
    input.placeholder = placeholder;
    return input;

};

export default inputText;

