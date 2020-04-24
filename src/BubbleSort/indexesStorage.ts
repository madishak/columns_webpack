import { IndexStorage } from '../types';

class IndexesStorage {
  listOfIndexes: number[];
  indexStorage: IndexStorage[];

  constructor() {
    this.listOfIndexes = [];
    this.indexStorage = [{ id: '' }];
  }

  getIndexes(): number[] {
    return this.listOfIndexes;
  }
  addIndexes(index: number): number[] {
    this.listOfIndexes = [...this.listOfIndexes, index];
    return this.listOfIndexes;
  }
}

export default IndexesStorage;
