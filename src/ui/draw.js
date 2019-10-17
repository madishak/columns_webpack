import createElement from "./createElement";

class Draw {
  static FIXED_COLUMN_HEIGHT = 15;
  static OFFSET = 30;
  static OFFSET_MARGIN = 3;
  constructor(array) {
    this.arrCopy = array.slice(0);
    this.columnsButtonsContainer = createElement({
      tag: "div",
      class: "columns-buttons__container"
    });
    this.columnsCloseInner = createElement({
      tag: "div",
      class: "columns-close__inner"
    });
    this.columns = [];
  }

  drawArray() {
    const columnsInner = createElement({ tag: "div", class: "columns__inner" });
    this.arrCopy.map((element, index) => {
      let newDiv = createElement({
        tag: "div",
        class: "column",
        text: element
      });
      this.columns = [...this.columns, newDiv];
      newDiv.style.height = `${Draw.FIXED_COLUMN_HEIGHT * element}px`;
      newDiv.style.left = Draw.moveColumnLeft(index);
      newDiv.style.backgroundColor = "dodgerblue";
      columnsInner.appendChild(newDiv);
      this.columnsButtonsContainer.style.width = `${index * Draw.OFFSET +
        Draw.OFFSET * Draw.OFFSET_MARGIN}px`;
    });

    console.log(this.arrCopy);
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

      this.columns[currentElements[0]].style.backgroundColor = "red";
      this.columns[currentElements[1]].style.backgroundColor = "red";

      setTimeout(() => {
        this.columns[i].style.backgroundColor = "dodgerblue";
      }, 500);
    }

    this.arrCopy = [...newArr];
  }

  static moveColumnLeft(index) {
    return `${index * Draw.OFFSET}px`;
  }
}

export default Draw;
