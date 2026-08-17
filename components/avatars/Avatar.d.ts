import * as React from 'react';

export interface AvatarProps {
  size?: 32 | 40 | 60;
  tone?: 'teal' | 'quiet';
  src?: string;
  /** One or two characters, weight 600. Never three. */
  initials?: string;
  icon?: React.ReactNode;
  alt?: string;
}
/**
 * @startingPoint section="Avatars" subtitle="3 sizes, photo/initials/icon, stack" viewport="700x160"
 */
export declare function Avatar(props: AvatarProps): JSX.Element;
export declare function AvatarStack(props: { children?: React.ReactNode }): JSX.Element;
