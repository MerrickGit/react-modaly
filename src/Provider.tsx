import React from 'react';
import { DialogContext } from './context';
import { TContext } from './types';

type TProps = {
  /**
   * HTML node element which use to render modal in React Portal
   */
  node: Element;
};

/**
 * Provider create context for `useDialog` hook.
 *
 * **You must use it once in app.**
 *
 * @example
 * import { Provider as ModalProvider } from 'react-modaly';
 *
 * const MODAL_NODE = document.getElementById('modal');
 *
 * const App = ({ children }) => (
 *   <ModalProvider node={MODAL_NODE}>
 *     {children}
 *   </ModalProvider>
 * );
 */
export const Provider: React.FC<TProps> = ({ children, node }) => {
  if (!node) throw new Error('node is required parameter for Modal Provider');

  const context: TContext = React.useMemo(() => ({ node }), [node]);

  return <DialogContext.Provider value={context}>{children}</DialogContext.Provider>;
};
