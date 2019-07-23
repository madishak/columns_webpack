class Sort {
    constructor(array) {
        this.arr = array.slice(0);
        this.listOfIndexes = [];
        //this.newArr = this.listOfIndexes.reverse();
        //this.listOfIndexesNext = [];
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


            for (let i = 0; i < this.arr.length; i++) {
                for (let j = 0; j < this.arr.length-i-1; j++) {
                    if (this.arr[j] > this.arr[j+1]) {
                        [this.arr[j], this.arr[j+1]] = [this.arr[j+1], this.arr[j]];
                        this.listOfIndexes = [j, j+1, ...this.listOfIndexes];
                        //this.listOfIndexesNext = [...this.listOfIndexesNext, j, j+1];

                        return  this.arr;
                    }

                }

            }

        return  this.arr;


    }

    change() {
        let listOfIndexes = this.listOfIndexes.slice(0);
        //console.log(this.arr);
        console.log(listOfIndexes);

        for (let j = 0; j < this.arr.length; j++) {


                    if (listOfIndexes.length !== 0) {
                        [this.arr[listOfIndexes[0]], this.arr[listOfIndexes[1]]] = [this.arr[listOfIndexes[1]], this.arr[listOfIndexes[0]]];
                        listOfIndexes.shift(listOfIndexes[0]);
                        listOfIndexes.shift(listOfIndexes[1]);

                        console.log(listOfIndexes);
                        return this.arr;

                    }


        }

        return this.arr;
    }


}

export default Sort;