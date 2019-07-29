import createElement from './ui/createElement'
import { linesWrapper } from "./ui/linesWrapper";

class Draw {
    constructor(array) {
        this.arr = array.slice(0);
        this.columnIndexArr = [];
        this.linesButtonsContainer = createElement('div', 'lines-buttons__container');
        this.linesInner = createElement('div', 'lines__inner');

    }

    drawArray() {
        const FIXED_COLUMN_HEIGHT = 15;
        const OFFSET = 30;


        for (let i = 0; i < this.arr.length; i++) {
            let newDiv = document.createElement('div');
            newDiv.innerHTML = this.arr[i];
            newDiv.id = this.arr[i];
            newDiv.className = 'line';
            this.columnIndexArr.push(i);
            newDiv.style.height = `${FIXED_COLUMN_HEIGHT * this.arr[i]}px`;
            newDiv.style.left = `${i * OFFSET}px`;
            this.linesInner.appendChild(newDiv);
        }
        this.linesButtonsContainer.appendChild(this.linesInner);
        linesWrapper.appendChild(this.linesButtonsContainer);
    }

    movement(newArr) {
        const bg = {
            first: 0,
            second: 1,
        };

        const COLUMN_MARGIN = 30;

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
            columns[this.columnIndexArr[i]].style.left = `${i * COLUMN_MARGIN}px`;
            columns[this.columnIndexArr[i]].style.backgroundColor = 'dodgerblue';
            columns[bg.first].style.backgroundColor = 'red';
            columns[bg.second].style.backgroundColor = 'red';
        }

        this.arr = [...newArr]; // плохо
    }
}

export default Draw;
