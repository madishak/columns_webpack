import createElement from './createElement.js';


// const inputText = (text, className, idInp, placeholder) => {
//     const input = createElement('input', className, text);
//     input.type = "text";
//     input.id = idInp;
//     input.placeholder = placeholder;
//     return input;
//
// };

const inputText = (attribute) => {
    const input = createElement({'tag':'input', 'class':attribute.class});
    input.type = attribute.type;
    input.id = attribute.id;
    input.placeholder = attribute.placeholder;
    return input;

};

export default inputText;

