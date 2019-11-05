class Sort {
  arr: number[];
  arrCopy: number[];
  listOfIndexes: number[];
  currentIndex: number;
  currentPosition: number;
  public constructor(array: number[]) {
    this.arr = array;
    this.arrCopy = [...this.arr];
    this.listOfIndexes = [];
    this.currentIndex = 0;
    this.currentPosition = 0;
  }

  public increaseSort(): number[] {
    if (this.listOfIndexes.length === this.currentIndex) {
      for (let i = 0; i < this.arrCopy.length - 1; i += 1) {
        for (let j = this.currentPosition; j < this.arrCopy.length - i - 1; j += 1) {
          if (this.arrCopy[j] > this.arrCopy[j + 1]) {
            Sort.swapElements(this.arrCopy, j);
            this.listOfIndexes = [...this.listOfIndexes, j];
            this.currentPosition = j;
            this.currentIndex = this.listOfIndexes.length;
            return this.arrCopy;
          }
        }
        this.currentPosition = 0;
      }
    }
    // else {
    //   console.log(this.currentIndex);
    //  Sort.swapElements(this.arrCopy, this.currentIndex);
    //   this.currentPosition = this.listOfIndexes[this.currentIndex-1];
    // }

    return this.arrCopy;
  }

  public decreaseSort(): number[] {
    console.log(this.listOfIndexes);
    let ReversedListOfIndexes = this.listOfIndexes.reduceRight((acc, elem) => [...acc, elem], []);
    console.log(ReversedListOfIndexes);

    // if (this.currentIndex > this.listOfIndexes.length) {
    //   this.currentIndex = 0;
    //   return this.currentIndex;
    // }
    console.log(this.currentPosition);
    for (let i =  0; i < ReversedListOfIndexes.length; i++) {
      // console.log(ReversedListOfIndexes[i]);
      for (let j = ReversedListOfIndexes[i]; j < this.arrCopy.length; j++) {

        if (ReversedListOfIndexes[i] === j) {
          Sort.swapElements(this.arrCopy, j);
          this.currentPosition = j;
         // console.log(this.listOfIndexes[i], j, this.currentIndex);
          return this.arrCopy;
        }
      }
      ///this.currentIndex =  this.currentIndex++;
    }

    return this.arrCopy;
    // for (let i = 0; i < this.arrCopy.length; i += 1) {
    //   if (this.listOfIndexes.length !== 0) {
    //     Sort.swapElements(this.arrCopy, this.listOfIndexes[this.listOfIndexes.length - 1]);
    //     this.listOfIndexes.pop();
    //     this.currentIndex = this.listOfIndexes[this.listOfIndexes.length - 1];
    //     return this.arrCopy;
    //   }
    // }
    // return this.arrCopy;
  }

  static swapElements(array: number[], index: number): void {
    [array[index], array[index + 1]] = [array[index + 1], array[index]];
  }

  // static saveSortStep(index) {
  //   this.listOfIndexes = [...this.listOfIndexes, index];
  // }
}

export default Sort;
