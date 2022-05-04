import { createContext } from '../../../global-context';

export interface ProviderContextValue {
  foo: string;
  bar: string;
  baz: string;
}

export const ProviderContext = createContext<ProviderContextValue>({foo: 'foo', bar: 'bar', baz: 'baz'}, 'ProviderContext', '@fluentui/react-provider', '1.1.0');