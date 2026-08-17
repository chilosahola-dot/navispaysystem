import * as React from 'react';

export interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  help?: string;
  error?: boolean;
  /** Icon name shown at the start of the field. */
  icon?: string;
}
/**
 * @startingPoint section="Forms" subtitle="Text field, textarea, search, slider" viewport="700x260"
 */
export declare function TextField(props: TextFieldProps): JSX.Element;

export interface TextareaFieldProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  help?: string;
}
export declare function TextareaField(props: TextareaFieldProps): JSX.Element;

export interface SearchFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {}
export declare function SearchField(props: SearchFieldProps): JSX.Element;

export interface SliderProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}
export declare function Slider(props: SliderProps): JSX.Element;
