import * as React from 'react';
import * as ReactDOM from 'react-dom';
import DefaultScenario from '../Default/Scenario';

type PortalWindowProps = {
  children: (externalDocument: Document) => React.ReactElement;
  onClose?: () => void;
};

const PortalWindow: React.FunctionComponent<PortalWindowProps> = ({ children, onClose }) => {
  const externalContainer = React.useRef<HTMLDivElement | null>(null);
  const externalWindow = React.useRef<Window | null>(null);
  const [mounted, setMounted] = React.useState<boolean>(false);

  React.useEffect(() => {
    externalWindow.current = window.open('', '', 'width=600,height=400,left=200,top=200');

    if (externalWindow.current === null) {
      return;
    }

    externalContainer.current = externalWindow.current.document.createElement('div');

    externalWindow.current.document.body.appendChild(externalContainer.current);
    if (onClose) externalWindow.current.onbeforeunload = onClose;

    setMounted(true);
    const win = externalWindow.current;

    return () => {
      win.close();
    };
  }, [onClose]);
  
  if (!mounted || !externalContainer.current) {
    return null;
  }

  return ReactDOM.createPortal(children(externalContainer.current.ownerDocument), externalContainer.current);
};

const MultiWindowScenario = () => {
  const [open, setOpen] = React.useState(false);
  const handleClose = React.useCallback(() => setOpen(false), []);

  return (
    <>
      <button onClick={() => setOpen(true)}>Open window!</button>
      {open && (
        <PortalWindow onClose={handleClose}>
          {externalDocument => (
            <DefaultScenario />
          )}
        </PortalWindow>
      )}
    </>
  );
};

export default MultiWindowScenario;