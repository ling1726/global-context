import React from 'react';
import { createContext } from '../../../global-context';

export interface ProviderContextValue {
  foo: string;
  bar: string;
}

export const ProviderContext = createContext<ProviderContextValue>({foo: 'foo', bar: 'bar' }, 'ProviderContext', '@fluentui/react-provider', '1.1.0');

export const useProviderContextV11 = () => {
  const ctx = React.useContext(ProviderContext);
  if (!ctx.bar) {
    ctx.bar = 'bar';
  }

  return ctx;
}