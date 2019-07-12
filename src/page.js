import createElement from './ui/createElement.js';
import button from "./ui/button"
import inputText from "./ui/input"

const renderHTML = () => {
    const wrapper = createElement('div', 'wrapper');
    document.body.appendChild(wrapper);

    const form = createElement('form', 'form');
    wrapper.appendChild(form);

    const input = inputText('', 'form__input', 'input', 'Enter numbers');
    form.appendChild(input);

    const buttonsInner = createElement('div', "form__button-inner");
    form.appendChild(buttonsInner);

    const deleteValue = button('form__button', 'очистить поле ввода', 'del');
    buttonsInner.appendChild(deleteValue);

    const linesWrapper = createElement('div', 'lines__wrapper');
    document.body.appendChild(linesWrapper);

};


export default renderHTML;