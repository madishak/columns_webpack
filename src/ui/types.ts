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
  sorters: SorterType[];
};

export type SorterType = {
  sorterId: number;
  sorterArr: number[];
};
