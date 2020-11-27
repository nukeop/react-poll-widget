import React from 'react';
import { Button, Header, Icon, Message } from 'semantic-ui-react';

import { PollStep } from '../../../types';
import StepsList from '../../StepsList';
import WizardFormContainer from '../../WizardFormContainer';
import WizardPanel from '../../WizardPanel';

export type PollStepsProps = {
  steps?: PollStep[];
}

const EmptyState = () => <WizardPanel>
  <Message
    warning
    icon='warning sign'
    header='This poll has no steps configured.'
    content='To publish the poll, it needs to have at least one step.'
  />
</WizardPanel>

const PollSteps: React.FC<PollStepsProps> = ({
  steps = []
}) => <WizardFormContainer>
    <Header as='h1'>
      Manage poll steps
  </Header>
    {steps.length < 1 && <EmptyState />}
    <StepsList steps={steps} />
    <Button color='green' size='huge'>
      <Icon name='plus' />
      Add a new step
      </Button>
  </WizardFormContainer>

export default PollSteps;