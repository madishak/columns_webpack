import { IndexStorage } from '../types';

class IndexesStorage {
  listOfIndexes: number[];
  indexStorage: IndexStorage;

  constructor() {
    this.listOfIndexes = [];
    this.indexStorage = {};
  }

  getIndexes(): IndexStorage {
    return this.indexStorage;
  }
  createStorage(id: string) {
    this.indexStorage[id] = [];
  }
  addIndexes(id: string, index: number): number[] {
    this.listOfIndexes = [...this.listOfIndexes, index];
    this.indexStorage[id] = this.listOfIndexes;
    return this.listOfIndexes;
  }
}

export default IndexesStorage;
