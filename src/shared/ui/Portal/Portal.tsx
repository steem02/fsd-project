import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
  node?: Element;
  children: ReactNode;
}

export function Portal({ children, node = document.body }: PortalProps) {
  return createPortal(children, node);
}
