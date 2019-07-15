class Sort {
    constructor(array) {
        this.arr = array.slice(0);
        this.listOfIndexes = [];
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
        console.log(this.arr);
        return this.arr;
    }


    increaseSort() {

        for (let i = 1; i < this.arr.length; i++) {
            for (let j = 1; j < i+1; j++) {
                if (this.arr[j-1] > this.arr[j]) {
                    [this.arr[j-1], this.arr[j]] = [this.arr[j], this.arr[j-1]];
                    this.listOfIndexes = [j-1, j, ...this.listOfIndexes]; //sort's steps(array's indexes)
                    return this.arr;
                }
            }
        }
        console.log(this.arr);
        return this.arr;

    }


}

export default Sort;