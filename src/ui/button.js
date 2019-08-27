import createElement from './createElement.js';


// const button = (className, text, idButton) => {
//     const button = createElement('button', className, text);
//     button.type = "button";
//     button.id = idButton;
//     return button;
// };

const button = (attribute) => {
    const button = createElement({'tag':'button', 'class':attribute.class, 'text':attribute.text});
    button.type = attribute.type;
    button.id = attribute.id;
    return button;
};

export default button;
