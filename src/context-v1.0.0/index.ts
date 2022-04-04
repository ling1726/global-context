import { createContext } from '../global-context';

export interface ProviderContextValue {
  foo: string;
  bar: string;
}

export const ProviderContext = createContext<ProviderContextValue>({foo: 'foo', bar: 'bar'}, 'ProviderContext', '@fluentui/react-provider', '1.0.0')