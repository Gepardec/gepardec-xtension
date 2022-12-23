export interface ColumnSpec<T> {
  displayedColumn: Extract<keyof T, string>;
  header: string;
}
