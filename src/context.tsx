import React from 'react';
import { TContext } from './types';

export const DialogContext = React.createContext<TContext>({
  instances: [],
  events: [],
  setEvents: () => { throw new Error('setEvents not implement') },
  setInstances: () => { throw new Error('setInstance not implement') },
  config: {}
});
