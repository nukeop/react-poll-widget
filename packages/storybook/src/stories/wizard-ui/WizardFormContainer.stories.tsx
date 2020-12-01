import React from 'react';

import {
  WizardFormContainer,
  WizardPanel
} from '@react-poll-widget/ui';

export default {
  title: 'Wizard UI/Components/Wizard Form Container'
}

export const ContainerWithPanel = () => <WizardFormContainer>
  <WizardPanel>
    test
  </WizardPanel>
</WizardFormContainer>