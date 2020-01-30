export type StateTypes = {
  sorters: SorterType[];
};

export type SorterType = {
  sorterId: number;
  sorterArr: number[];
};

export type AnimationValues = {
  previousElem: string;
  currentElem: HTMLElement;
};
