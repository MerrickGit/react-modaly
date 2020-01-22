import * as React from 'react';
import { TContext } from './types';

export const DialogContext = React.createContext<TContext>({ node: 'MainContext' });
