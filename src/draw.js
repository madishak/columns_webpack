class Draw {
    constructor(array) {
        this.arr = array;
        this.columnIndexArr = [];

    }


    drawArray() {

        const fixedColumnHeight = 15;

        const offset = 30;

        let container = document.createElement('div');
        container.className = "line__inner";
        container.id = "line__inner";
        document.body.appendChild(container);

        for (let i = 0; i < this.arr.length; i++) {

            let newDiv = document.createElement('div');
            newDiv.innerHTML = this.arr[i];
            newDiv.id = this.arr[i];
            newDiv.className = "line";
            this.columnIndexArr.push(i);
            container.appendChild(newDiv);
            newDiv.style.height = `${fixedColumnHeight * this.arr[i]}px`;
            newDiv.style.left =  `${i * offset}px`;
        }

    }


    movement(newArr) {

        const columnMargin = 30;

        const [...columns] = document.getElementsByClassName('line'); //columns => HTML objects


        for (let i = 0; i < newArr.length; i++) {
            if (newArr[i] !== this.arr[i]) {
                [this.columnIndexArr[i], this.columnIndexArr[i+1]] = [this.columnIndexArr[i+1], this.columnIndexArr[i]];
                break;
            }
        }
        for (let i = 0; i < columns.length; i++) {
            columns[this.columnIndexArr[i]].style.left = `${i * columnMargin}px`;
        }
        this.arr = [...newArr];// плохо



    }


}


export default Draw;