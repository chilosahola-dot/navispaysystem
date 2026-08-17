import * as React from 'react';

export interface TabItem { value: string; label: string; disabled?: boolean; }
export interface TabsProps {
  items: TabItem[];
  value: string;
  onChange?: (value: string) => void;
}
/**
 * @startingPoint section="Navigation" subtitle="Tabs, breadcrumbs, pagination" viewport="700x320"
 */
export declare function Tabs(props: TabsProps): JSX.Element;

export interface CrumbItem { label: string; href?: string; }
export declare function Breadcrumbs(props: { items: CrumbItem[] }): JSX.Element;

export interface PaginationProps {
  page: number;
  pageCount: number;
  onChange: (page: number) => void;
  total?: number;
  pageSize?: number;
}
export declare function Pagination(props: PaginationProps): JSX.Element;
