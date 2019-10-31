class Sort {
  public constructor(array: number[]) {
    this.arr = array;
    this.arrCopy = [...this.arr];
    this.listOfIndexes = [];
    this.currentIndex = 0;
  }

  public increaseSort(): number[] {
    for (let i = 0; i < this.arrCopy.length - 1; i += 1) {
      for (let j = this.currentIndex; j < this.arrCopy.length - i - 1; j += 1) {
        if (this.arrCopy[j] > this.arrCopy[j + 1]) {
          Sort.swapElements(this.arrCopy, j);
          this.listOfIndexes = [...this.listOfIndexes, j];
          this.currentIndex = j;
          return this.arrCopy;
        }
      }
      this.currentIndex = 0;
    }
    return this.arrCopy;
  }

  public decreaseSort(): number[] {
    // if (this.currentIndex > this.listOfIndexes.length) {
    //   this.currentIndex = 0;
    //   return this.currentIndex;
    // }
    // for (let i = this.currentIndex; i <= this.listOfIndexes.length; i++) {
    //   for (let j = 0; j < this.arrCopy.length; j++) {
    //
    //     if (this.listOfIndexes[i] === j) {
    //       Sort.swapElements(this.arrCopy, j);
    //       this.currentIndex = this.currentIndex + 1;
    //      // console.log(this.listOfIndexes[i], j, this.currentIndex);
    //       return this.arrCopy;
    //     }
    //   }
    // }
    // this.currentIndex = 0;
    // return this.arrCopy;
    for (let i = 0; i < this.arrCopy.length; i += 1) {
      if (this.listOfIndexes.length !== 0) {
        Sort.swapElements(this.arrCopy, this.listOfIndexes[this.listOfIndexes.length - 1]);
        this.listOfIndexes.pop();
        this.currentIndex = this.listOfIndexes[this.listOfIndexes.length - 1];
        return this.arrCopy;
      }
    }
    return this.arrCopy;
  }

  static swapElements(array: number[], index: number) {
    [array[index], array[index + 1]] = [array[index + 1], array[index]];
  }

  // static saveSortStep(index) {
  //   this.listOfIndexes = [...this.listOfIndexes, index];
  // }
}

export default Sort;
