import { TContext, TOpenCallback, TUseDialog } from './types';
import { useContext } from 'react';
import { DialogContext } from './context';

/**
 * useDialog is hook which can be used to open modal window.
 * useDialog return `open` function which is Promise.
 * This promise will resolved/rejected when modal window will closed.
 *
 * @example
 * import { useState } from 'react';
 * import { actions } from 'react-modaly';
 * const Button = () => {
 *  const [disabled, setDisabled] = useState(false);
 *
 *  const { open } = useDialog();
 *  const onClick = () => {
 *    open('account/information', { isShowIcon: true })
 *      .then(({ values }) => setDisabled(values.rightAccess));
 *  };
 *
 *
 *  return (
 *    <button onClick={onClick} disabled={disabled}>Choose something into modal</button>
 *  );
 * };
 */
export const useDialog = (): TUseDialog => {
  const { setEvents, setInstances, config } = useContext<TContext>(DialogContext);

  const open: TOpenCallback = instance =>
    new Promise((resolve, reject): void => {
      if (instance.instanceName in config) {
        setInstances(prevInstances => [...prevInstances, instance]);
        setEvents(prevEvents => [...prevEvents, { resolve, reject }]);
      } else {
        throw new Error(`${instance['instanceName']} don't exist in modal config`);
      }
    });

  return { open };
};
