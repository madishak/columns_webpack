type IndexStorage = {
  id: string;
  arr: number[];
};

class BubbleSort {
  // arr: number[];
  // arrCopy: number[];
  listOfIndexes: number[];
  indexStorage: IndexStorage[];
  currentIndex: number;
  currentPosition: number;

  public constructor() {
    // this.arr = array;
    // this.arrCopy = [];
    this.listOfIndexes = [];
    this.indexStorage = [];
    this.currentIndex = 0;
    this.currentPosition = 0;
  }

  public increaseSort(id: string, arrCopy: number[]): number[] {
    console.log(this.listOfIndexes);
    if (this.currentIndex === this.listOfIndexes.length) {
      for (let i = 0; i < arrCopy.length - 1; i += 1) {
        for (let j = this.currentPosition; j < arrCopy.length - i - 1; j += 1) {
          if (arrCopy[j] > arrCopy[j + 1]) {
            BubbleSort.swapElements(arrCopy, j);
            this.listOfIndexes = [...this.listOfIndexes, j];
            //   this.indexStorage = this.indexStorage.forEach((elem: IndexStorage): IndexStorage[] => {
            //   console.log(elem);
            //   // if (elem.id !== id) {
            //   this.indexStorage = [...this.indexStorage, { id, arr: this.listOfIndexes }];
            //   // }
            //   // elem.arr = this.listOfIndexes;
            //   return this.indexStorage;
            // });
            this.indexStorage = [...this.indexStorage, { id, arr: this.listOfIndexes }];
            console.log(this.indexStorage);
            this.currentPosition = j;
            this.currentIndex += 1;
            return arrCopy;
          }
          this.currentPosition = 0;
        }
      }
    } else {
      BubbleSort.swapElements(arrCopy, this.listOfIndexes[this.currentIndex]);
      this.currentIndex += 1;
      return arrCopy;
    }
    return arrCopy;
  }

  public decreaseSort(arrCopy: number[]): number[] {
    for (let i = 0; i < arrCopy.length; i += 1) {
      if (this.currentIndex > 0) {
        BubbleSort.swapElements(arrCopy, this.listOfIndexes[this.currentIndex - 1]);
        this.currentIndex -= 1;
        this.currentPosition = this.listOfIndexes[this.currentIndex];
        return arrCopy;
      }
    }
    return arrCopy;
  }

  static swapElements(array: number[], index: number): number[] {
    [array[index], array[index + 1]] = [array[index + 1], array[index]];
    return array;
  }
}

export default BubbleSort;
