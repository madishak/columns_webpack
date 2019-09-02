class SelectionSort {
    constructor(array) {
        this.arr = array.slice(0);
        this.listOfIndexes = [];

    }

    increaseSort() {
        for (let i = 0; i < this.arr.length; i++) {
            let indexMin = i;
            for (let j = i + 1; j < this.arr.length; j++) {
                if (this.arr[indexMin] > this.arr[j]) {
                    indexMin = j;
                }
            }        if (indexMin !== i) {
                [this.arr[i], this.arr[indexMin]] = [this.arr[indexMin], this.arr[i]];
                this.listOfIndexes = [i, indexMin, ...this.listOfIndexes];
                return this.arr;
            }
        }
        return this.arr;
    }


    decreaseSort() {
        for (let i = 0; i < this.arr.length; i++) {
            if (this.listOfIndexes.length !== 0) {
                [this.arr[this.listOfIndexes[0]], this.arr[this.listOfIndexes[1]]] = [this.arr[this.listOfIndexes[1]], this.arr[this.listOfIndexes[0]]];
                this.listOfIndexes.shift(this.listOfIndexes[0]);
                this.listOfIndexes.shift(this.listOfIndexes[1]);
                return this.arr;
            }
        }
        return this.arr;
    }

}

export default SelectionSort;