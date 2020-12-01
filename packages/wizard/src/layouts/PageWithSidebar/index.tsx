import React from 'react';

import { WizardSidebar } from '@react-poll-widget/ui';

export const PageWithSidebar: React.FC = ({
  children
}) => <main>
    <WizardSidebar />
    {children}
</main>;