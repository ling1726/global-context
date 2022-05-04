import React from 'react';
import { ProviderContext as ProviderContextV1 } from './context-v1.0.0';
import { ProviderContext as ProviderContextV11, useProviderContextV11 } from './context-v1.1.0';


function App() {
  return (
    <ProviderContextV1.Provider value={{ foo: 'red' }}>
        <Example />
    </ProviderContextV1.Provider>
  );
}

function Example() {
  // use native React.useContext to see the error
  // const ctxV11 = React.useContext(ProviderContextV11);
  const ctxV11 = useProviderContextV11();
  return (
    <>
      <pre>1.1.0: {ctxV11.bar.toString()} </pre>
    </>
  );

}

export default App;
