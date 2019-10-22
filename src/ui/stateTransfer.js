import createElement from './createElement';
// import renderCollection from './renderCollection';
import { wrapper } from './columnsWrapper';
import Sort from './sort';
import Draw from './draw';
import button from './button';

// const renderCollection = (closeButtonId, inputValue) => {
//
//     if (inputValue.length === 0) {
//         return;
//     }
//     const sort = new Sort(inputValue);
//     const draw = new Draw(inputValue);
//
//     render.state.map(elem => (closeButtonId === elem.id ? (elem.arr = sort.arrCopy) : elem.arr));
//     draw.drawArray();
//
//     const closeButton = button({
//         class: 'columns__close',
//         text: '&times;'
//     });
//
//     closeButton.addEventListener('click', () => {
//         render.removeSorter(closeButtonId);
//         render.render();
//     });
//
//     draw.columnsCloseInner.prepend(closeButton);
//     render.container.append(draw.columnsButtonsContainer);
//
//     const buttonBack = button({
//         class: 'columns__button',
//         text: 'назад',
//         id: 'dec'
//     });
//
//     const buttonNext = button({
//         class: 'columns__button',
//         text: 'вперед',
//         id: 'inc'
//     });
//
//     buttonBack.addEventListener('click', () => draw.movement(sort.decreaseSort()));
//     buttonNext.addEventListener('click', () => draw.movement(sort.increaseSort()));
//
//     const buttonsInner = createElement({
//         tag: 'div',
//         class: 'columns__button-inner'
//     });
//     buttonsInner.append(buttonBack, buttonNext); //experimental technology "Node.append()"
//
//     draw.columnsButtonsContainer.appendChild(buttonsInner);
//
//     //wrapper.append(render.container);
// };

// class StateTransfer {
//     constructor() {
//         this.state = [];
//         this.container = createElement({ tag: 'div', class: 'wrapperColumns' });
//         this.key = this.state.id;
//     }
//
//     setState(value) {
//         this.state = [...this.state, value];
//     }
//
//     removeSorter(index) {
//         this.state = this.state.reduce(
//             (acc, elem) => (elem.id !== index ? (acc = [...acc, elem]) : acc),
//             []
//         );
//     }
//
//     render() {
//         this.container.innerHTML = '';
//         this.state.map(elem => renderCollection(elem.id, elem.arr));
//         // console.log(this.container);
//         wrapper.appendChild(this.container);
//         return this.container;
//     }
// }
//
// const render = new StateTransfer();
//
// export default StateTransfer;
