import React from 'react';

export type TAction = 'close' | 'success' | 'cancel';

export type TReturnContext<V = null> = {
  action: TAction;
  /** Any values from modal window */
  values?: V;
};

export type TEvents = {
  resolve: Function;
  reject: Function;
};

export type TInstances = {
  instanceName: string;
  params?: any; // eslint-disable-this-line
};

export type TOpenCallback = <V = null>(instance: TInstances) => Promise<TReturnContext<V>>;

export type TUseDialog = {
  open: TOpenCallback;
};

export type TContext = {
  instances: Array<TInstances>;
  events: Array<TEvents>;
  setInstances: React.Dispatch<React.SetStateAction<Array<TInstances>>>;
  setEvents: React.Dispatch<React.SetStateAction<Array<TEvents>>>;
  config: {
    [instanceName: string]: React.FC<null>;
  };
};
