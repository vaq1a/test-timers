import { FC, PropsWithChildren } from 'react';

import styles from './Actions.module.css';

const Actions: FC<PropsWithChildren> = (
  {
    children
  }
) => {
  return (
    <div className={styles.container}>
      {children}
    </div>
  );
};

export default Actions;