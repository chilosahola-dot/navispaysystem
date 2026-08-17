import * as React from 'react';

export interface CalendarDay {
  label: string | number;
  out?: boolean;
  today?: boolean;
  selected?: boolean;
  event?: boolean;
}
export interface DatePickerProps {
  overline?: string;
  selectedLabel: string;
  monthLabel: string;
  weekdays?: string[];
  days: CalendarDay[];
  onPrevMonth?: () => void;
  onNextMonth?: () => void;
  onSelect?: (day: CalendarDay) => void;
  onCancel?: () => void;
  onConfirm?: () => void;
}
/**
 * @startingPoint section="Data" subtitle="340px, navy header, event dots" viewport="700x400"
 */
export declare function DatePicker(props: DatePickerProps): JSX.Element;
