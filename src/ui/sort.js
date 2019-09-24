class Sort {
  constructor(array) {
    this.arr = array.slice(0);
    this.arrCopy = this.arr.slice(0);
    this.listOfIndexes = [];
    this.currentIndex = 0;
  }

  increaseSort() {
    for (let i = 0; i < this.arrCopy.length - 1; i++) {
      for (let j = this.currentIndex; j < this.arrCopy.length - i - 1; j++) {
        if (this.arrCopy[j] > this.arrCopy[j + 1]) {
          [this.arrCopy[j], this.arrCopy[j + 1]] = [
            this.arrCopy[j + 1],
            this.arrCopy[j]
          ];
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
        [
          this.arrCopy[this.listOfIndexes[this.listOfIndexes.length - 1]],
          this.arrCopy[this.listOfIndexes[this.listOfIndexes.length - 1] + 1]
        ] = [
          this.arrCopy[this.listOfIndexes[this.listOfIndexes.length - 1] + 1],
          this.arrCopy[this.listOfIndexes[this.listOfIndexes.length - 1]]
        ];
        this.listOfIndexes.pop();
        this.currentIndex = this.listOfIndexes[this.listOfIndexes.length - 1];
        return this.arrCopy;
      }
    }
    return this.arrCopy;
  }
}

export default Sort;
