export type ModalKey = string;

export interface ModalState {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: React.ComponentType<any>;
  props: {} & { isOpen: boolean; title: string };
  key: ModalKey;
  portalTarget: HTMLElement | null;
  isHelp?: boolean;
}

export interface OpenParams<T> extends Omit<ModalState, 'props'> {
  props?: Omit<T, 'isOpen'> & { title: string };
}

export interface CloseParam {
  key: ModalKey;
  clearTime: number;
}

export interface OpenModal {
  props: Pick<ModalState, 'props'>;
  options?: OpenModalOptions;
}

export interface OpenModalOptions {
  key?: ModalKey;
  portalTarget?: HTMLElement | null;
  isHelpIcon?: boolean;
}

export interface CloseModalOptions {
  key?: ModalKey;
  clearTime?: number;
}

export interface ModalItemProps extends Omit<ModalState, 'key'> {
  modalKey: ModalKey;
  isHelp?: boolean;
}
