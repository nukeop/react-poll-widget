import React from 'react';

import { SidebarContainer } from '../../views/SidebarContainer/SidebarContainer';
import styles from './styles.module.scss';

export const PageWithSidebar: React.FC = ({
  children
}) => <main
className={styles['page-with-sidebar']}
>
    <SidebarContainer />
    {children}
  </main>;