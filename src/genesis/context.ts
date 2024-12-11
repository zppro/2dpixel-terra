
import { type Genesis } from "./type";
import React, { useContext } from 'react';

const GenesisContext = React.createContext<Genesis>(
  undefined as unknown as Genesis,
);

export function useGenesis(): Genesis {
  return useContext(GenesisContext);
}

export const GenesisProvider: React.FC<{
  g: Genesis;
  children?: React.ReactNode;
}> = ({ g, children }) => {
  return React.createElement(
    GenesisContext.Provider,
    { value: g },
    children,
  );
};