import createElement from './ui/createElement'
import { columnsWrapper } from "./ui/columnsWrapper";

class Draw {
    static FIXED_COLUMN_HEIGHT = 15;
    static OFFSET = 30;
    constructor(array) {
        this.arr = array.slice(0);
        this.columnIndexArr = [];
        this.columnsButtonsContainer = createElement({'tag':'div', 'class':'columns-buttons__container'});
        this.columnsInner = createElement({'tag':'div', 'class':'columns__inner'});
        this.columns = [];

    }



   drawArray() {


        this.arr.map((element, index) => {
            let newDiv = createElement({'tag':'div', 'class':'column', 'text':element});
            this.columns = [...this.columns, newDiv];
            this.columnIndexArr.push(index);
            newDiv.style.height = `${Draw.FIXED_COLUMN_HEIGHT * element}px`;
            newDiv.style.left = Draw.moveColumnLeft(index);
            this.columnsInner.appendChild(newDiv);
        });
        this.columnsButtonsContainer.appendChild(this.columnsInner);
        columnsWrapper.appendChild(this.columnsButtonsContainer);
    }

    movement(newArr) {
        const bg = {
            first: 0,
            second: 1
        };

        const currentElements = {};

        console.log(this.columnIndexArr);
        //const [...columns] = this.columnsInner.getElementsByClassName('column'); //columns => HTML objects
        //const offsets = columns.map((elem) => elem.offsetLeft);

        for (let i = 0; i < newArr.length; i++) {
            if (newArr[i] !== this.arr[i]) {
                //console.log(newArr[i], this.arr[i]);
                //[newArr[i], this.arr[i]] = [this.arr[i], newArr[i]];

                [this.columnIndexArr[i], this.columnIndexArr[i + 1]] = [this.columnIndexArr[i + 1], this.columnIndexArr[i]];
                console.log(this.columnIndexArr[i], this.columnIndexArr[i+1]);
                bg.first = this.columnIndexArr[i];
                bg.second = this.columnIndexArr[i + 1];

                break;
            }
        }
        for (let i = 0; i < this.columns.length; i++) {
            this.columns[this.columnIndexArr[i]].style.left = Draw.moveColumnLeft(i);
            this.columns[this.columnIndexArr[i]].style.backgroundColor = 'dodgerblue';
            this.columns[bg.first].style.backgroundColor = 'red';
            this.columns[bg.second].style.backgroundColor = 'red';
        }

        this.arr = [...newArr];

        // this.arr.map((elem, i) => {
            newArr.map((val, j) => {

                if (this.arr[j] !== val) {
                    currentElements.first = this.arr[j];
                    currentElements.second = val;
                    currentElements.secondIndex = j;

                }
            });
        // });

        //console.log(currentElements);

    }

    static moveColumnLeft(index)  {
        return `${index * Draw.OFFSET}px`;
    }


}

export default Draw;
