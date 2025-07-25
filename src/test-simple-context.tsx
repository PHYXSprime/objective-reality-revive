// Simple test to check if LanguageProvider is working
import { useContext, createContext, useState, ReactNode } from 'react';

const SimpleContext = createContext<{ test: string } | undefined>(undefined);

export function SimpleProvider({ children }: { children: ReactNode }) {
  return (
    <SimpleContext.Provider value={{ test: 'working' }}>
      {children}
    </SimpleContext.Provider>
  );
}

export function useSimple() {
  const context = useContext(SimpleContext);
  if (!context) {
    throw new Error('useSimple must be used within SimpleProvider');
  }
  return context;
}