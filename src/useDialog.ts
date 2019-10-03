import {TContext, TOpenCallback, TUseDialog} from "./types";
import {useContext} from "react";
import {DialogContext} from "./context";

export const useDialog = (): TUseDialog => {
  const { setEvents, setInstances, config } = useContext<TContext>(DialogContext);

  const open: TOpenCallback = (instance) =>
    new Promise((resolve, reject) => {
      if (instance.instanceName in config) {
        setInstances(prevInstances => [ ...prevInstances, instance ]);
        setEvents(prevEvents => [...prevEvents, { resolve, reject }]);
      } else {
        throw new Error(
          `${instance['instanceName']} don't exist in modal config`
        );
      }
    });

  return { open };
};
