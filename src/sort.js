class Sort {
    constructor(array) {
        this.arr = array.slice(0);
        this.listOfIndexes = [];
        //this.newArr = this.listOfIndexes.reverse();
        this.listOfIndexesBack = [];
    }


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
        //console.log(this.arr);
        //console.log(this.listOfIndexes);
        return this.arr;
    }


    increaseSort() {


            for (let i = 0; i < this.arr.length; i++) {
                for (let j = 0; j < this.arr.length-i-1; j++) {
                    if (this.arr[j] > this.arr[j+1]) {
                        [this.arr[j], this.arr[j+1]] = [this.arr[j+1], this.arr[j]];
                        //this.listOfIndexes = [j, j+1, ...this.listOfIndexes];
                        this.listOfIndexes = [...this.listOfIndexes, j, j+1];

                        //return  this.arr;
                    }

                }

            }
            console.log(this.listOfIndexes);

        return  this.arr;


    }

    change() {
       // let listOfIndexes = this.listOfIndexes.slice(0);
        //console.log(this.arr);
        //console.log(this.listOfIndexes);

        for (let j = 0; j < this.arr.length; j++) {


                    if (this.listOfIndexes.length !== 0) {
                        [this.arr[this.listOfIndexes[0]], this.arr[this.listOfIndexes[1]]] = [this.arr[this.listOfIndexes[1]], this.arr[this.listOfIndexes[0]]];
                        this.listOfIndexesBack.unshift(this.listOfIndexes[0]);
                        this.listOfIndexesBack.unshift(this.listOfIndexes[1]);
                        this.listOfIndexes.shift(this.listOfIndexes[0]);
                        this.listOfIndexes.shift(this.listOfIndexes[1]);

                        //console.log(this.listOfIndexesBack);
                        return this.arr;

                    }


        }

        return this.arr;
    }


}

export default Sort;