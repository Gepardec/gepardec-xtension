export interface ColumnSpec<T> {
  displayedColumn: Extract<keyof T | string, string>;
  header: string;
  width?: string;
}
