import { PropsWithChildren } from 'react';
import cns from 'shared/lib/classnames/cns';
import { Loader } from 'shared/ui/Loader/Loader';
import css from './PageLoader.module.scss';

interface PageLoaderProps {
  className?: string;
}

export function PageLoader(props: PropsWithChildren<PageLoaderProps>) {
  const { className } = props;
  return (
    <div className={cns(css.root, { className })}>
      <Loader />
    </div>
  );
}
