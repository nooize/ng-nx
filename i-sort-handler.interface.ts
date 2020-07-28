export interface ISortHandler {
  IsSortReversed(): boolean;
  SortFiledName(): string;
  Sort(filed: string, reversed: boolean)
}
