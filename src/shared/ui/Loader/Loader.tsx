import cns from 'shared/lib/classnames/cns';
import css from './Loader.module.scss';

interface LoaderProps {
  className?: string;
}

export function Loader(props: LoaderProps) {
  const { className } = props;
  return <span className={cns(css.root, { className }, [])} />;
}
