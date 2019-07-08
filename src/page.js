const makeElement = (tag, className, text) => {
    const element = document.createElement(tag);

    if (className) {
        element.classList.add(className);
    }

    if (text) {
        element.textContent = text;
    }

    return element;
};

const renderHTML = () => {
    const wrapper = makeElement('div', 'wrapper');
    document.body.appendChild(wrapper);

    const form = makeElement('form', 'form');
    wrapper.appendChild(form);


    const input = makeElement('input', 'form__input');
    input.type = "text";
    input.placeholder = "Enter numbers";
    input.id = "input";
    form.appendChild(input);

    const buttonsInner = makeElement('div', "form__button-inner");
    form.appendChild(buttonsInner);

    const buttonBack = makeElement('button', "form__button", "назад");
    buttonBack.id = "dec";
    buttonBack.type = "button";
    buttonsInner.appendChild(buttonBack);

    const buttonNext = makeElement('button', "form__button", "вперед");
    buttonNext.id = "inc";
    buttonNext.type = "button";
    buttonsInner.appendChild(buttonNext);

    const deleteValue = makeElement('button', "form__button", "удалить значение");
    deleteValue.id = "del";
    deleteValue.type = "button";
    buttonsInner.appendChild(deleteValue);

    const linesWrapper = makeElement('div', 'lines__wrapper');
    document.body.appendChild(linesWrapper);

    return {
        "input": input,
        "butBack": buttonBack,
        "butNext": buttonNext,
        "delVal": deleteValue

    };
};


export default renderHTML;