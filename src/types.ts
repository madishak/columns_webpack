export type createElemAttributes = {
  tag: string;
  class: string;
  text?: string;
};

export type buttonAttributes = {
  class: string;
  text: string;
  type: string;
  id?: string;
};

export type inputAttributes = {
  class: string;
  type: string;
  id: string;
  placeholder: string;
};

export type AnimationValues = {
  previousElem: string;
  currentElem: HTMLElement;
};

export type StateTypes = {
  sorters?: SorterType[];
  // numbers?: number[];
};

export type SorterType = {
  sorterId: string;
  sorterArr: number[];
};


export type IndexStorage = {
  id: string;
  arr: number[];
};