class Sort {
    constructor(numberString) {
        this.numsArr = numberString.split("").map(element => {
            Number(element);

            if (isNaN(element)) {
                console.log('Введите цифры, вместо букв');
                return element;
            }
            return element;

        });
        this.arr = this.numsArr.slice(0);
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
        return this.arr;
    }


    increaseSort() {

        for (let i = 0; i < this.arr.length-1; i++) {
            for (let j = 0; j < this.arr.length-1-i; j++) {
                if (this.arr[j+1] < this.arr[j]) {
                    [this.arr[j+1], this.arr[j]] = [this.arr[j], this.arr[j+1]];
                    this.listOfIndexes = [j, j + 1, ...this.listOfIndexes];
                    return this.arr;
                }
            }
        }
        return this.arr;

    }


}

export default Sort;