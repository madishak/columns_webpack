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
    for (let i = 0; i < newArr.length; i += 1) {
      if (newArr[i] !== this.arrCopy[i]) {
        currentElements = [...currentElements, i];
      }
    }

    // const first: HTMLElement = this.columns[currentElements[0]];

    [this.columns[currentElements[0]], this.columns[currentElements[1]]] = [
      this.columns[currentElements[1]],
      this.columns[currentElements[0]]
    ];
    const t = DrawSorter.compareColumns(
      this.columns[currentElements[0]],
      this.columns[currentElements[1]]
    );
    console.log('sec=', t.second, 'prev=', t.prev);
    console.log(
      this.columns[currentElements[0]].innerText,
      this.columns[currentElements[1]].innerText
    );
    for (let i = 0; i < this.columns.length; i += 1) {
      if (currentElements.length === 0) {
        break;
      }

      this.columns[i].style.left = DrawSorter.moveColumnLeft(i);
      const second: HTMLElement = this.columns[currentElements[1]];
      console.log('second = ', second);

      this.columns[currentElements[0]].style.backgroundColor = DrawSorter.COLUMN_BACKLIGHT;
      this.columns[currentElements[1]].style.backgroundColor = DrawSorter.COLUMN_BACKLIGHT;
      DrawSorter.delayAnimationNext(this.previousElement, second);

      setTimeout(() => {
        this.columns[i].style.backgroundColor = DrawSorter.COLUMN_BACKGROUND;
      }, 500);
    }
    this.previousElement = this.columns[currentElements[1]].innerText;
    console.log('prev = ', this.previousElement);
    this.arrCopy = [...newArr];
    return this.arrCopy;
  }

  static moveColumnLeft(index: number): string {
    return `${index * DrawSorter.OFFSET}px`;
  }

  static delayAnimationNext(elem1: string, elem2: HTMLElement) {
    if (elem1 === elem2.innerText) {
      setTimeout(() => {
        //elem2.style.backgroundColor = DrawSorter.COLUMN_BACKGROUND;
        elem2.style.backgroundColor = 'yellow';
      }, 900);
    }
  }

  static compareColumns(elem1: HTMLElement, elem2: HTMLElement) {
    if (elem1.innerText < elem2.innerText) {
      return { second: elem2, prev: elem2.innerText };
    }
    return { second: 5, prev: 10 };
  }
}

export default DrawSorter;
