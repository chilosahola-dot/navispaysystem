import * as React from 'react';

export interface ModalProps {
  title: string;
  onClose?: () => void;
  actions?: React.ReactNode;
  children?: React.ReactNode;
}
/**
 * @startingPoint section="Feedback" subtitle="Modal, alert dialog, toast, inline alert" viewport="700x420"
 */
export declare function Modal(props: ModalProps): JSX.Element;

export interface AlertDialogProps {
  title: string;
  description: string;
  actions?: React.ReactNode;
}
export declare function AlertDialog(props: AlertDialogProps): JSX.Element;

export interface ToastProps {
  tone?: 'error' | 'warning' | 'info' | 'success';
  children?: React.ReactNode;
  onDismiss?: () => void;
}
export declare function Toast(props: ToastProps): JSX.Element;

export interface AlertProps {
  tone?: 'error' | 'warning' | 'info' | 'success';
  title?: string;
  children?: React.ReactNode;
}
export declare function Alert(props: AlertProps): JSX.Element;
