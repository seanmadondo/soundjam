import React from "react";

import { TicketStore } from "./TicketStore";

interface RootStateContextValue {
  ticketStore: TicketStore;
}

const RootStateContext = React.createContext<RootStateContextValue>(
  {} as RootStateContextValue
);

const ticketStore = new TicketStore();

export const RootStateProvider: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  return (
    <RootStateContext.Provider value={{ ticketStore }}>
      {children}
    </RootStateContext.Provider>
  );
};

export const useRootStore = () => React.useContext(RootStateContext);
