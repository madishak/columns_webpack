import createElement from '../CommonComponents/createElement';
import { AnimationValues } from '../types';
import './style.css';

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
  previousAnimElement: string;

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
    this.previousAnimElement = '';
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

  public movement(newArr: number[]): number[] {
    let currentElements: number[] = [];
    for (let i = 0; i < newArr.length; i += 1) {
      if (newArr[i] !== this.arrCopy[i]) {
        currentElements = [...currentElements, i];
      }
    }
    if (currentElements.length === 0) {
      return [];
    }
    [this.columns[currentElements[0]], this.columns[currentElements[1]]] = [
      this.columns[currentElements[1]],
      this.columns[currentElements[0]]
    ];
    const animationValues: AnimationValues = Draw.compareColumns(
      this.columns[currentElements[0]],
      this.columns[currentElements[1]]
    );
    const { currentElem, previousElem } = animationValues;
    for (let i = 0; i < this.columns.length; i += 1) {
      if (currentElements.length === 0) {
        break;
      }

      this.columns[i].style.left = Draw.moveColumnLeft(i);
      const currentAnimElem: HTMLElement = currentElem;

      this.columns[currentElements[0]].style.backgroundColor = Draw.COLUMN_BACKLIGHT;
      this.columns[currentElements[1]].style.backgroundColor = Draw.COLUMN_BACKLIGHT;
      Draw.animateSelectedColumns(this.columns[i], 500);
      Draw.delayAnimation(this.previousAnimElement, currentAnimElem);
    }
    this.previousAnimElement = previousElem;
    this.arrCopy = [...newArr];
    return this.arrCopy;
  }

  static moveColumnLeft(index: number): string {
    return `${index * Draw.OFFSET}px`;
  }

  static compareColumns(activeElem1: HTMLElement, activeElem2: HTMLElement): AnimationValues {
    if (activeElem1.innerText < activeElem2.innerText) {
      return { previousElem: activeElem2.innerText, currentElem: activeElem2 };
    }
    return { previousElem: activeElem1.innerText, currentElem: activeElem1 };
  }

  static delayAnimation(previousElem: string, currentElem: HTMLElement): void {
    if (previousElem === currentElem.innerText) {
      Draw.animateSelectedColumns(currentElem, 900);
    }
  }
  static animateSelectedColumns(currentElem: HTMLElement, period: number): void {
    setTimeout(() => {
      currentElem.style.backgroundColor = Draw.COLUMN_BACKGROUND;
    }, period);
  }
}

export default Draw;
