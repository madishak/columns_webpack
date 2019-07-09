import createElement from './createElement.js';


const inputt = (text, className, id, placeholder) => {
    let input = createElement('input', className, text);
    input.type = "text";
    input.id = id;
    input.placeholder = placeholder;
    // input.addEventListener('change', onChange);
};

export default inputt;

