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

  public increaseSort(arrCopy: number[]): number[] {
    if (this.currentIndex === this.listOfIndexes.length) {
      for (let i = 0; i < arrCopy.length - 1; i += 1) {
        for (let j = this.currentPosition; j < arrCopy.length - i - 1; j += 1) {
          if (arrCopy[j] > arrCopy[j + 1]) {
            Sort.swapElements(arrCopy, j);
            this.listOfIndexes = [...this.listOfIndexes, j];
            this.currentPosition = j;
            this.currentIndex += 1;
            return arrCopy;
          }
          this.currentPosition = 0;
        }
      }
    } else {
      Sort.swapElements(this.arrCopy, this.listOfIndexes[this.currentIndex]);
      this.currentIndex += 1;
      return arrCopy;
    }
    return arrCopy;
  }

  public decreaseSort(): number[] {
    for (let i = 0; i < this.arrCopy.length; i += 1) {
      if (this.currentIndex > 0) {
        Sort.swapElements(this.arrCopy, this.listOfIndexes[this.currentIndex - 1]);
        this.currentIndex -= 1;
        this.currentPosition = this.listOfIndexes[this.currentIndex];
        return this.arrCopy;
      }
    }
    return this.arrCopy;
  }

  static swapElements(array: number[], index: number): number[] {
    [array[index], array[index + 1]] = [array[index + 1], array[index]];
    return array;
  }
}

export default Sort;
