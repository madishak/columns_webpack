class Sort {
  constructor(array) {
    this.arrCopy = array.slice(0);
    this.listOfIndexes = [];
    this.currentIndex = 0;
  }

  increaseSort() {
    for (let i = 0; i < this.arrCopy.length - 1; i++) {
      for (let j = this.currentIndex; j < this.arrCopy.length - i - 1; j++) {
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

  decreaseSort() {
    for (let i = 0; i < this.arrCopy.length; i++) {
      if (this.listOfIndexes.length !== 0) {
        Sort.swapElements(this.arrCopy, this.listOfIndexes[this.listOfIndexes.length - 1]);
        this.listOfIndexes.pop();
        this.currentIndex = this.listOfIndexes[this.listOfIndexes.length - 1];
        return this.arrCopy;
      }
    }
    return this.arrCopy;
  }

  static swapElements(array, index) {
    [array[index], array[index + 1]] = [array[index + 1], array[index]];
  }

  static saveSortStep(index) {
    this.listOfIndexes = [...this.listOfIndexes, index];
  }
}

export default Sort;
