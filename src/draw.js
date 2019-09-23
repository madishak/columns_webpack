import createElement from "./ui/createElement";
import { columnsWrapper } from "./ui/columnsWrapper";

class Draw {
  static FIXED_COLUMN_HEIGHT = 15;
  static OFFSET = 30;
  constructor(array) {
    this.arr = array.slice(0);
    this.arrCopy = this.arr.slice(0);
    this.columnIndexArr = [];
    this.columnsButtonsContainer = createElement({
      tag: "div",
      class: "columns-buttons__container"
    });
    //this.columnsCloseInner = createElement({ tag: "div", class: "columns-close__inner" });
    this.columns = [];
  }

  drawArray() {
    const columnsInner = createElement({ tag: "div", class: "columns__inner" });
    this.arrCopy.forEach((element, index) => {
      let newDiv = createElement({
        tag: "div",
        class: "column",
        text: element
      });
      this.columns = [...this.columns, newDiv];
      this.columnIndexArr.push(index);
      newDiv.style.height = `${Draw.FIXED_COLUMN_HEIGHT * element}px`;
      newDiv.style.left = Draw.moveColumnLeft(index);
      columnsInner.appendChild(newDiv);
    });
    //this.columnsCloseInner.appendChild();
    this.columnsButtonsContainer.appendChild(columnsInner);
    columnsWrapper.appendChild(this.columnsButtonsContainer);
  }

  movement(newArr) {
    let currentElements = [];

    for (let i = 0; i < newArr.length; i++) {
      if (newArr[i] !== this.arrCopy[i]) {
        currentElements = [...currentElements, i];
      }
    }

    [
      this.columns[this.columnIndexArr[currentElements[0]]],
      this.columns[this.columnIndexArr[currentElements[1]]]
    ] = [
      this.columns[this.columnIndexArr[currentElements[1]]],
      this.columns[this.columnIndexArr[currentElements[0]]]
    ];

    for (let i = 0; i < this.columns.length; i++) {
      if (currentElements.length === 0) {
        break;
      }

      this.columns[this.columnIndexArr[i]].style.left = Draw.moveColumnLeft(i);
      this.columns[this.columnIndexArr[i]].style.backgroundColor = "dodgerblue";

      this.columns[
        this.columnIndexArr[currentElements[0]]
      ].style.backgroundColor = "red";
      this.columns[
        this.columnIndexArr[currentElements[1]]
      ].style.backgroundColor = "red";
    }

    this.arrCopy = [...newArr];
  }

  static moveColumnLeft(index) {
    return `${index * Draw.OFFSET}px`;
  }
}

export default Draw;
