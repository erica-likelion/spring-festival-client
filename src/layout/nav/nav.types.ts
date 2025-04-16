import { ReactElement } from 'react';

export type navItem = {
  id: string;
  path: string;
  label: string;
  icon: object;
  DefaultIcon: ReactElement;
};

export type navItems = navItem[];
