import React, { useMemo, useState, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { DialogContext } from './context';
import { TInstances, TEvents, TReturnContext } from './types';
import { statuses } from './constants';

type TProps = {
  node: Element,
  Layout: React.ElementType
  config: {
    [instanceName: string]: React.FC<null>
  }
};

export const Provider: React.FC<TProps> = ({
  children,
  node,
  config,
  Layout
}) => {
  const [instances, setInstances] = useState<Array<TInstances>>([]);
  const [events, setEvents] = useState<Array<TEvents>>([]);


  const close = useCallback((): void => {
    const { resolve } = events[events.length - 1];
    const resolveParams: TReturnContext = { action: statuses.close };

    setInstances(prevInstances =>
      prevInstances.filter((_, index) => index !== prevInstances.length - 1)
    );
    setEvents(prevEvents =>
      prevEvents.filter((_, index) => index !== prevEvents.length - 1)
    );

    resolve(resolveParams);
  }, [events]);


  const cancel = useCallback(
    <T,>(values: T): void => {
      const { resolve } = events[events.length - 1];
      const resolveParams: TReturnContext<T> = { action: statuses.cancel, values };

      setInstances(prevInstances =>
        prevInstances.filter((_el, index) => index !== prevInstances.length - 1)
      );
      setEvents(prevEvents =>
        prevEvents.filter((_el, index) => index !== prevEvents.length - 1)
      );

      resolve(resolveParams);
    },
    [events]
  );

  const success = useCallback(
    <T,>(values:T):void => {
      const { resolve } = events[events.length - 1];
      const resolveParams: TReturnContext<T> = { action: statuses.success, values };

      setInstances(prevInstances =>
        prevInstances.filter((_el, index) => index !== prevInstances.length - 1)
      );
      setEvents(prevEvents =>
        prevEvents.filter((_el, index) => index !== prevEvents.length - 1)
      );


      resolve(resolveParams);
    },
    [events]
  );

  const context = {
    instances,
    setInstances,
    events,
    setEvents,
    config
  };


  const Component = instances.map((instance) => (
    <Layout
      key={instance.instanceName}
      component={config[instance.instanceName]}
      cancel={cancel}
      success={success}
      close={close}
      {...instance}
    />
  ));

  const child = useMemo(() => React.Children.only(children), [children]);

  return (
    <DialogContext.Provider value={context}>
      <>
        {child}
        {createPortal(Component, node)}
      </>
    </DialogContext.Provider>
  );
};
