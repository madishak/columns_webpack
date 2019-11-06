import createElement from './createElement';

class Draw {
  static FIXED_COLUMN_HEIGHT = 15;
  static OFFSET = 30;
  static OFFSET_MARGIN = 3;
  static COLUMN_BACKGROUND = 'dodgerblue';
  static COLUMN_BACKLIGHT = 'red';

  arr: number[];
  arrCopy: number[];
  columnsButtonsContainer: HTMLElement;
  columnsCloseInner: HTMLElement;
  columns: HTMLElement[];

  public constructor(array: number[]) {
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

  public drawArray(): HTMLElement {
    const columnsInner = createElement({ tag: 'div', class: 'columns__inner' });
    this.columns = this.arrCopy.map((element: number, index: number) => {
      const newDiv = createElement({
        tag: 'div',
        class: 'column',
        text: String(element)
      });
      newDiv.style.height = `${Draw.FIXED_COLUMN_HEIGHT * element}px`;
      newDiv.style.left = Draw.moveColumnLeft(index);
      columnsInner.appendChild(newDiv);
      this.columnsButtonsContainer.style.width = `${index * Draw.OFFSET +
        Draw.OFFSET * Draw.OFFSET_MARGIN}px`;
      return newDiv;
    });
    this.columnsCloseInner.append(columnsInner);
    this.columnsButtonsContainer.append(this.columnsCloseInner);
    return this.columnsButtonsContainer;
  }

  movement(newArr: number[]): number[] {
    let currentElements: number[] = [];
    // console.log(currentElements);

    for (let i = 0; i < newArr.length; i += 1) {
      if (newArr[i] !== this.arrCopy[i]) {
        currentElements = [...currentElements, i];
      }
    }

    [this.columns[currentElements[0]], this.columns[currentElements[1]]] = [
      this.columns[currentElements[1]],
      this.columns[currentElements[0]]
    ];

    for (let i = 0; i < this.columns.length; i += 1) {
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
    return this.arrCopy;
  }

  static moveColumnLeft(index: number): string {
    return `${index * Draw.OFFSET}px`;
  }
}

export default Draw;
