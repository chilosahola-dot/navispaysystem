import * as React from 'react';

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  /** accent (default, for standalone CTAs) / ink (inside running prose) / quiet (dense UI chrome). */
  tone?: 'accent' | 'ink' | 'quiet';
  size?: 14 | 16;
  disabled?: boolean;
}
/**
 * @startingPoint section="Links" subtitle="3 tones x 2 sizes" viewport="700x160"
 */
export declare function Link(props: LinkProps): JSX.Element;
