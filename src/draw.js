import createElement from './ui/createElement'
import { linesWrapper } from "./ui/linesWrapper";

class Draw {
    static FIXED_COLUMN_HEIGHT = 15;
    static OFFSET = 30;
    constructor(array) {
        this.arr = array.slice(0);
        this.columnIndexArr = [];
        this.linesButtonsContainer = createElement('div', 'lines-buttons__container');
        this.linesInner = createElement('div', 'lines__inner');

    }



   drawArray() {


        this.arr.map((element, index) => {
            let newDiv = createElement('div', 'line', element);
            this.columnIndexArr.push(index);
            newDiv.style.height = `${Draw.FIXED_COLUMN_HEIGHT * element}px`;
            newDiv.style.left = `${index * Draw.OFFSET}px`;
            this.linesInner.appendChild(newDiv);
        });
        this.linesButtonsContainer.appendChild(this.linesInner);
        linesWrapper.appendChild(this.linesButtonsContainer);
    }

    movement(newArr) {
        const bg = {
            first: 0,
            second: 1
        };


        const [...columns] = this.linesInner.getElementsByClassName('line'); //columns => HTML objects

        for (let i = 0; i < newArr.length; i++) {
            if (newArr[i] !== this.arr[i]) {

                [this.columnIndexArr[i], this.columnIndexArr[i + 1]] = [this.columnIndexArr[i + 1], this.columnIndexArr[i]];
                bg.first = this.columnIndexArr[i];
                bg.second = this.columnIndexArr[i + 1];

                break;
            }
        }
        for (let i = 0; i < columns.length; i++) {
            columns[this.columnIndexArr[i]].style.left = `${i * Draw.OFFSET}px`;
            columns[this.columnIndexArr[i]].style.backgroundColor = 'dodgerblue';
            columns[bg.first].style.backgroundColor = 'red';
            columns[bg.second].style.backgroundColor = 'red';
        }

        this.arr = [...newArr];
    }
}

export default Draw;
