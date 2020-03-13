import { StateTypes } from '../types';

class State {
  state: StateTypes;

  public constructor() {
    this.state = {};
  }

  public getState(): StateTypes {
    return this.state;
  }

  public addState(value: StateTypes): StateTypes {
    this.state.sorters = value.sorters;
    return this.state;
  }
}

export default State;
