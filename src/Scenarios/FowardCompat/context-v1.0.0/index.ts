import { createContext } from '../../../global-context';

export interface ProviderContextValue {
  foo: string;
}

export const ProviderContext = createContext<ProviderContextValue>({foo: 'foo' }, 'ProviderContext', '@fluentui/react-provider', '1.0.0')