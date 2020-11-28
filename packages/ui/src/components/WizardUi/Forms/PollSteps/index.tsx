import React from 'react';
import { Button, Header, Icon, Message } from 'semantic-ui-react';

import StepsList, { StepsListProps } from '../../StepsList';
import { StepDetailsProps } from '../../StepsList/StepDetails';
import WizardFormContainer from '../../WizardFormContainer';
import WizardPanel from '../../WizardPanel';

export type PollStepsProps = StepsListProps &
  Pick<StepDetailsProps, 'onChangeOption' | 'onDeleteOption'>;

const EmptyState = () => <WizardPanel>
  <Message
    warning
    icon='warning sign'
    header='This poll has no steps configured.'
    content='To publish the poll, it needs to have at least one step.'
  />
</WizardPanel>

const PollSteps: React.FC<PollStepsProps> = ({
  steps = [],
  onDragEnd,
  onChangeOption,
  onDeleteOption,
  onAddOption
}) => <WizardFormContainer>
    <Header as='h1'>
      Manage poll steps
  </Header>
    {steps.length < 1 && <EmptyState />}
    <StepsList
      steps={steps}
      onDragEnd={onDragEnd}
      onChangeOption={onChangeOption}
      onDeleteOption={onDeleteOption}
      onAddOption={onAddOption}
    />
    <Button color='green' size='huge'>
      <Icon name='plus' />
        Add a new step
      </Button>
  </WizardFormContainer>

export default PollSteps;