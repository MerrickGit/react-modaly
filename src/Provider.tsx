import React from 'react';
import { DialogContext } from './context';
import { TContext } from './types';

type TProps = {
  /**
   * HTML element which use to render modal in React Portal
   */
  node: Element;
};

export const Provider: React.FC<TProps> = ({ children, node }) => {
  if (!node) throw new Error('node is required parameter for Modal Provider');

  const context: TContext = React.useMemo(() => ({ node }), [node]);

  return <DialogContext.Provider value={context}>{children}</DialogContext.Provider>;
};
