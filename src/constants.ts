import { TAction } from './types';

type TStatuses = {
  close: TAction,
  success: TAction,
  cancel: TAction
};

export const statuses: TStatuses = {
  close: 'close',
  success: 'success',
  cancel: 'cancel'
};
