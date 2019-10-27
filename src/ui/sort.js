class Sort {
  constructor(array) {
    this.arr = array;
    this.arrCopy = [...this.arr];
    this.listOfIndexes = [];
    this.currentIndex = 0;
  }

  increaseSort() {
   // console.log(this.listOfIndexes);
    for (let i = 0; i < this.arrCopy.length - 1; i++) {
      for (let j = this.currentIndex; j < this.arrCopy.length - i - 1; j++) {
        if (this.arrCopy[j] > this.arrCopy[j + 1]) {
          Sort.swapElements(this.arrCopy, j);
          this.listOfIndexes = [j, ...this.listOfIndexes];
          this.currentIndex = j;
          return this.arrCopy;
        }
      }
      this.currentIndex = 0;
    }

    return this.arrCopy;
  }

  decreaseSort() {

      for (let j = 0; j < this.arrCopy.length; j++) {
          for (let i = 0; i < this.listOfIndexes.length; i++) {
        console.log(this.listOfIndexes[i], j);
        if (this.listOfIndexes[i] === j) {

          Sort.swapElements(this.arrCopy, j);
          console.log(this.arrCopy);
          return this.arrCopy;
        }
      }
        this.currentIndex = this.listOfIndexes[i];
    }
      return this.arrCopy;
    //   return this.listOfIndexes.reduceRight((acc, elem) => {
    //   return this.arrCopy.map((el, i) => {
    //     if (i === elem) {
    //       console.log(i, elem);
    //       this.currentIndex = elem;
    //       Sort.swapElements(this.arrCopy, i);
    //       console.log(this.arrCopy);
    //       return this.arrCopy;
    //     }
    //   })
    // }, []);
    //   console.log(this.listOfIndexes.reverse());
    // for (let i = 0; i < this.arrCopy.length; i++) {
    //   if (this.listOfIndexes.length !== 0) {
    //     Sort.swapElements(this.arrCopy, this.listOfIndexes[this.listOfIndexes.length - 1]);
    //     this.listOfIndexes.pop();
    //     this.currentIndex = this.listOfIndexes[this.listOfIndexes.length - 1];
    //     return this.arrCopy;
    //   }
    // }
    // return this.arrCopy;

  }

  static swapElements(array, index) {
    [array[index], array[index + 1]] = [array[index + 1], array[index]];
  }

  static saveSortStep(index) {
    this.listOfIndexes = [...this.listOfIndexes, index];
  }
}

export default Sort;
