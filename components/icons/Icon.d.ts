import * as React from 'react';

export interface IconProps extends React.SVGAttributes<SVGSVGElement> {
  /** One of the 27 names in ICON_NAMES, e.g. "search", "ledger", "arrow-right". */
  name: string;
  /** Pixel size, applied to both width and height. Default 20 -- the only size that pairs with body text. Use 16, 18 or 24 for other contexts. */
  size?: number;
}

/**
 * @startingPoint section="Icons" subtitle="27 outline icons, 24x24 grid, stroke 1.75" viewport="700x260"
 */
export declare function Icon(props: IconProps): JSX.Element;
export declare const ICON_NAMES: string[];
