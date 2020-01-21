import createElement from './commonComponents/createElement';

class DrawSorter {
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
  previousElement: string;

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
    this.previousElement = '';
  }

  public drawArray(): HTMLElement {
    const columnsInner = createElement({ tag: 'div', class: 'columns__inner' });
    this.columns = this.arrCopy.map((element: number, index: number) => {
      const newDiv = createElement({
        tag: 'div',
        class: 'column',
        text: String(element)
      });
      newDiv.style.height = `${DrawSorter.FIXED_COLUMN_HEIGHT * element}px`;
      newDiv.style.left = DrawSorter.moveColumnLeft(index);
      columnsInner.appendChild(newDiv);
      this.columnsButtonsContainer.style.width = `${index * DrawSorter.OFFSET +
        DrawSorter.OFFSET * DrawSorter.OFFSET_MARGIN}px`;
      return newDiv;
    });
    this.columnsCloseInner.append(columnsInner);
    this.columnsButtonsContainer.append(this.columnsCloseInner);
    return this.columnsButtonsContainer;
  }

  public movement(newArr: number[]): number[] {
    let currentElements: number[] = [];
    //console.log('newArr', newArr);
    for (let i = 0; i < newArr.length; i += 1) {
      if (newArr[i] !== this.arrCopy[i]) {
        currentElements = [...currentElements, i];
      }
    }

    //console.log('first', this.columns[currentElements[0]], this.columns[currentElements[1]]);

    const first: HTMLElement = this.columns[currentElements[0]];

    [this.columns[currentElements[0]], this.columns[currentElements[1]]] = [
      this.columns[currentElements[1]],
      this.columns[currentElements[0]]
    ];
    for (let i = 0; i < this.columns.length; i += 1) {
      if (currentElements.length === 0) {
        break;
      }

      this.columns[i].style.left = DrawSorter.moveColumnLeft(i);
      ///console.log('second', this.columns[currentElements[0]], this.columns[currentElements[1]]);
      const second: HTMLElement = this.columns[currentElements[1]];

      // console.log(this.previousElement, second.innerText);
      // console.log("compare", this.columns[currentElements[0]].innerText, this.columns[currentElements[1]].innerText);

      this.columns[currentElements[0]].style.backgroundColor = DrawSorter.COLUMN_BACKLIGHT;
      this.columns[currentElements[1]].style.backgroundColor = DrawSorter.COLUMN_BACKLIGHT;

      setTimeout(() => {
        this.columns[i].style.backgroundColor = DrawSorter.COLUMN_BACKGROUND;
      }, 500);

      if (this.previousElement === second.innerText) {
        setTimeout(() => {
          //  second.style.backgroundColor = DrawSorter.COLUMN_BACKGROUND;
          second.style.backgroundColor = 'yellow';
        }, 700);
      }
    }
    this.previousElement = this.columns[currentElements[1]].innerText;
    this.arrCopy = [...newArr];
    return this.arrCopy;
  }

  static moveColumnLeft(index: number): string {
    return `${index * DrawSorter.OFFSET}px`;
  }
}

export default DrawSorter;
