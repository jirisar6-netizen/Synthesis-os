import React, { createContext, useContext, ReactNode } from 'react';

interface G_Sync_ContextType {
  status: string;
}

const G_Sync_Context = createContext<G_Sync_ContextType | undefined>(undefined);

export const G_Sync_Provider: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <G_Sync_Context.Provider value={{ status: 'INITIALIZING' }}>
      {children}
    </G_Sync_Context.Provider>
  );
};

export const useGSync = () => {
  const context = useContext(G_Sync_Context);
  if (context === undefined) {
    throw new Error('useGSync must be used within a G_Sync_Provider');
  }
  return context;
};
