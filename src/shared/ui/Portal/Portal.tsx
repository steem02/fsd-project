import { ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { useTheme } from 'shared/hooks/useTheme';
import cns from 'shared/lib/classnames/cns';

interface PortalProps {
  node?: Element;
  children: ReactNode;
}

export function Portal({ children, node = document.body }: PortalProps) {
  const { theme } = useTheme();
  const content = <div className={cns('app', {}, ['theme', theme])}>{children}</div>;
  return createPortal(content, node);
}
