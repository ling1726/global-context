import { createContext } from '../../../global-context';

export interface ProviderContextValueV2 {
  bar: string;
  baz: string;
}

export const ProviderContext = createContext<ProviderContextValueV2>({bar: 'bar', baz: 'baz'}, 'ProviderContext', '@fluentui/react-provider', '2.0.0');