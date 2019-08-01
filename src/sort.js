class Sort {
    constructor(array) {
        this.arr = array.slice(0);
        this.listOfIndexes = [];
        this.listOfIndexesBack = [];
        this.currentIndex = 0;
    }


    increaseSort() {

        if (this.currentIndex >= this.arr.length) {

            this.currentIndex = 0;
        }
        console.log(this.arr.length);
        console.log(this.currentIndex);
        //for(let i = this.currentIndex; i < this.arr.length-1; i++) {
        let flag = true;
        while (flag) {
            flag = false;
            for (let j = this.currentIndex; j <= this.arr.length; j++) {
                if (this.arr[j] > this.arr[j + 1]) {
                    this.currentIndex = this.currentIndex + 1;

                    [this.arr[j], this.arr[j + 1]] = [this.arr[j + 1], this.arr[j]];
                    this.listOfIndexes = [...this.listOfIndexes, j, j + 1];
                    flag = true;

                    //console.log(j, j + 1);
                    console.log(this.arr);
                    return this.arr;


                }
            }
       }
        console.log(this.arr);
        return  this.arr;
    }

    // bubbleSort() {
    //     const arrayCopy = this.arr.slice(0);
    //
    //     for (let i = 0; i < arrayCopy.length; i++) {
    //         for (let j = 0; j < arrayCopy.length-i-1; j++) {
    //             if (arrayCopy[j] > arrayCopy[j+1]) {
    //                 [arrayCopy[j], arrayCopy[j+1]] = [arrayCopy[j+1], arrayCopy[j]];
    //                 this.listOfIndexes = [...this.listOfIndexes, j, j+1];
    //             }
    //         }
    //     }
    //     return  arrayCopy;
    // }

    // increaseSort() {
    //     for (let j = 0; j < this.arr.length; j++) {
    //
    //
    //                 if (this.listOfIndexes.length !== 0) {
    //                     [this.arr[this.listOfIndexes[0]], this.arr[this.listOfIndexes[1]]] = [this.arr[this.listOfIndexes[1]], this.arr[this.listOfIndexes[0]]];
    //                     this.listOfIndexesBack = [this.listOfIndexes[0], this.listOfIndexes[1], ...this.listOfIndexesBack];
    //                     this.listOfIndexes.shift(this.listOfIndexes[0]);
    //                     this.listOfIndexes.shift(this.listOfIndexes[1]);
    //                     return this.arr;
    //                 }
    //     }
    //     return this.arr;
    // }

    decreaseSort() {
        for (let i = 0; i < this.arr.length; i++) {
            if (this.listOfIndexesBack.length !== 0) {
                [this.arr[this.listOfIndexesBack[0]], this.arr[this.listOfIndexesBack[1]]] = [this.arr[this.listOfIndexesBack[1]], this.arr[this.listOfIndexesBack[0]]];
                this.listOfIndexes = [this.listOfIndexesBack[0], this.listOfIndexesBack[1], ...this.listOfIndexes];
                this.listOfIndexesBack.shift(this.listOfIndexesBack[0]);
                this.listOfIndexesBack.shift(this.listOfIndexesBack[1]);
                return this.arr;
            }

        }
        return this.arr;
    }


}

export default Sort;