import { IndexStorage, Indexes } from '../types';

class BubbleSort {
  indexStorage: IndexStorage;
  indexes: Indexes;
  public constructor() {
    this.indexStorage = {};
    this.indexes = { list: [], currentIndex: 0, currentPosition: 0 };
  }

  public increaseSort(id: string, arrCopy: number[]): number[] {
    const indexes: Indexes = { list: [], currentIndex: 0, currentPosition: 0 };

    const indexesKeys = Object.keys(this.indexStorage);
    if (!indexesKeys.includes(id)) {
      this.indexStorage[id] = indexes;
      this.indexStorage[id].list = [];
    }
    if (this.indexStorage[id].currentIndex === this.indexStorage[id].list.length) {
      for (let i = 0; i < arrCopy.length - 1; i += 1) {
        for (let j = this.indexStorage[id].currentPosition; j < arrCopy.length - i - 1; j += 1) {
          if (arrCopy[j] > arrCopy[j + 1]) {
            BubbleSort.swapElements(arrCopy, j);
            this.indexStorage[id].list = [...this.indexStorage[id].list, j];
            this.indexStorage[id].currentPosition = j;
            this.indexStorage[id].currentIndex += 1;
            return arrCopy;
          }
          this.indexStorage[id].currentPosition = 0;
        }
      }
    } else {
      BubbleSort.swapElements(
        arrCopy,
        this.indexStorage[id].list[this.indexStorage[id].currentIndex],
      );
      this.indexStorage[id].currentIndex += 1;
      return arrCopy;
    }
    return arrCopy;
  }

  public decreaseSort(id: string, arrCopy: number[]): number[] {
    for (let i = 0; i < arrCopy.length; i += 1) {
      if (this.indexStorage[id].currentIndex > 0) {
        BubbleSort.swapElements(
          arrCopy,
          this.indexStorage[id].list[this.indexStorage[id].currentIndex - 1],
        );
        this.indexStorage[id].currentIndex -= 1;
        this.indexStorage[id].currentPosition = this.indexStorage[id].list[
          this.indexStorage[id].currentIndex
        ];
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
