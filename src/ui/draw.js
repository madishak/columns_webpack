import createElement from './createElement';

class Draw {
  static FIXED_COLUMN_HEIGHT = 15;
  static OFFSET = 30;
  static OFFSET_MARGIN = 3;
  static COLUMN_BACKGROUND = 'dodgerblue';
  static COLUMN_BACKLIGHT = 'red';

  constructor(array) {
    this.arr = array;
    this.arrCopy = [...this.arr];
    this.columnsButtonsContainer = createElement({
      tag: 'div',
      class: 'columns-buttons__container'
    });
    this.columnsCloseInner = createElement({
      tag: 'div',
      class: 'columns-close__inner'
    });
    this.columns = [];
  }

  drawArray() {
    const columnsInner = createElement({ tag: 'div', class: 'columns__inner' });
    this.arrCopy.map((element, index) => {
      const newDiv = createElement({
        tag: 'div',
        class: 'column',
        text: element
      });
      this.columns = [...this.columns, newDiv];
      newDiv.style.height = `${Draw.FIXED_COLUMN_HEIGHT * element}px`;
      newDiv.style.left = Draw.moveColumnLeft(index);
      columnsInner.appendChild(newDiv);
      this.columnsButtonsContainer.style.width = `${index * Draw.OFFSET +
        Draw.OFFSET * Draw.OFFSET_MARGIN}px`;
      return newDiv;
    });

    this.columnsCloseInner.append(columnsInner);
    this.columnsButtonsContainer.append(this.columnsCloseInner);
  }

  movement(newArr) {
    let currentElements = [];

    for (let i = 0; i < newArr.length; i++) {
      if (newArr[i] !== this.arrCopy[i]) {
        currentElements = [...currentElements, i];
      }
    }

    [this.columns[currentElements[0]], this.columns[currentElements[1]]] = [
      this.columns[currentElements[1]],
      this.columns[currentElements[0]]
    ];

    for (let i = 0; i < this.columns.length; i++) {
      if (currentElements.length === 0) {
        break;
      }

      this.columns[i].style.left = Draw.moveColumnLeft(i);

      this.columns[currentElements[0]].style.backgroundColor = Draw.COLUMN_BACKLIGHT;
      this.columns[currentElements[1]].style.backgroundColor = Draw.COLUMN_BACKLIGHT;

      setTimeout(() => {
        this.columns[i].style.backgroundColor = Draw.COLUMN_BACKGROUND;
      }, 500);
    }

    this.arrCopy = [...newArr];
  }

  static moveColumnLeft(index) {
    return `${index * Draw.OFFSET}px`;
  }
}

export default Draw;
