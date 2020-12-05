import React from 'react';

import { WizardSidebar } from '@react-poll-widget/ui';
import styles from './styles.module.scss';

export const PageWithSidebar: React.FC = ({
  children
}) => <main
className={styles['page-with-sidebar']}
>
    <WizardSidebar
      selectedPollOptions={[]}
      selectedPoll='test'
      onSelectedPollChange={() => { }}
      onCreateNewPoll={() => { }}
    />
    {children}
  </main>;