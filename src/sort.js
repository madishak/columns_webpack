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
                    this.listOfIndexes = [...this.listOfIndexes, j];
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
                [this.arr[this.listOfIndexes[this.listOfIndexes.length-1]], this.arr[this.listOfIndexes[this.listOfIndexes.length-1] + 1]] =
                    [this.arr[this.listOfIndexes[this.listOfIndexes.length-1] + 1], this.arr[this.listOfIndexes[this.listOfIndexes.length-1]]];
                this.listOfIndexes.pop();
                this.currentIndex = this.listOfIndexes[this.listOfIndexes.length-1];
                return this.arr;
            }
        }
        return this.arr;
    }

}

export default Sort;