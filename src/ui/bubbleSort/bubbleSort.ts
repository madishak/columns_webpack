class BubbleSort {
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
    if (this.currentIndex === this.listOfIndexes.length) {
      for (let i = 0; i < this.arrCopy.length - 1; i += 1) {
        for (let j = this.currentPosition; j < this.arrCopy.length - i - 1; j += 1) {
          if (this.arrCopy[j] > this.arrCopy[j + 1]) {
            BubbleSort.swapElements(this.arrCopy, j);
            this.listOfIndexes = [...this.listOfIndexes, j];
            this.currentPosition = j;
            this.currentIndex += 1;
            return this.arrCopy;
          }
          this.currentPosition = 0;
        }
      }
    } else {
      BubbleSort.swapElements(this.arrCopy, this.listOfIndexes[this.currentIndex]);
      this.currentIndex += 1;
      return this.arrCopy;
    }
    return this.arrCopy;
  }

  public decreaseSort(): number[] {
    for (let i = 0; i < this.arrCopy.length; i += 1) {
      if (this.currentIndex > 0) {
        BubbleSort.swapElements(this.arrCopy, this.listOfIndexes[this.currentIndex - 1]);
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

export default BubbleSort;
