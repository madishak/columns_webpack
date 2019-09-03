class Sort {
    constructor(array) {
        this.arr = array.slice(0);
        this.listOfIndexes = [];
        this.currentIndex = 0;
    }


    increaseSort() {
        for (let i = 0; i < this.arr.length-1; i++) {
            for (let j = this.currentIndex; j < this.arr.length-i-1; j++) {
                if (this.arr[j] > this.arr[j + 1]) {
                    [this.arr[j], this.arr[j + 1]] = [this.arr[j + 1], this.arr[j]];
                    this.listOfIndexes = [j, ...this.listOfIndexes];
                    this.currentIndex = j;
                    return this.arr;
                    }
                }
                    this.currentIndex = 0;
            }
            return this.arr;

    }

    decreaseSort() {
        for (let i = 0; i < this.arr.length; i++) {
            if (this.listOfIndexes.length !== 0) {
                [this.arr[this.listOfIndexes[0]], this.arr[this.listOfIndexes[0] + 1]] = [this.arr[this.listOfIndexes[0] + 1], this.arr[this.listOfIndexes[0]]];
                this.listOfIndexes.shift(this.listOfIndexes[0]);
                this.currentIndex = this.listOfIndexes[0];
                return this.arr;
            }
        }
        return this.arr;
    }

}

export default Sort;