import * as React from 'react';

export interface TableColumn {
  key: string;
  label?: string;
  align?: 'left' | 'right';
  width?: number | string;
  sortable?: boolean;
  render?: (row: any) => React.ReactNode;
}
export interface TableProps {
  columns: TableColumn[];
  rows: any[];
  rowKey?: string;
}
/**
 * @startingPoint section="Data" subtitle="Header 44px, row 60px, mono tabular amounts" viewport="700x280"
 */
export declare function Table(props: TableProps): JSX.Element;
