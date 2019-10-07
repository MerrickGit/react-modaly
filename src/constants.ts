import { TAction } from './types';

type TActions = {
  close: TAction;
  success: TAction;
  cancel: TAction;
};

export const actions: TActions = {
  close: 'close',
  success: 'success',
  cancel: 'cancel',
};
