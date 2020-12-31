import React from 'react';
import { Card, Message, Placeholder, Segment } from 'semantic-ui-react';
import  { Link } from 'react-router-dom';
import { Poll } from '@react-poll-widget/core/src/models/polls';

import WizardFormContainer from "../../WizardFormContainer";
import WizardPanel from '../../WizardPanel';

import './styles.scss';

export type PollsDashboardProps = {
  polls?: Poll[];
  isLoading?: boolean;
};

const EmptyState = () => <WizardPanel>
  <Message
    warning
    icon='warning sign'
    header='You have no polls.'
    content='Once you have created a poll, it will appear here.'
  />
</WizardPanel>

const PlaceholderCard = () => <Card>
  <Segment>
    <Placeholder>
      <Placeholder.Line />
      <Placeholder.Line />
    </Placeholder>
  </Segment>
</Card>;

const LoadingState = () => <>
  <PlaceholderCard />
  <PlaceholderCard />
  <PlaceholderCard />
</>;

const PollsDashboard: React.FC<PollsDashboardProps> = ({
  polls,
  isLoading
}) => <WizardFormContainer className='polls-dashboard'>
    <div className='polls'>
      {(!polls || polls.length < 1) && !isLoading && <EmptyState />}
      {isLoading && <LoadingState />}
      {
        polls &&
        polls.length >= 1 &&
        polls.map(poll => <Card
          key={poll.id}
          header={poll.name}
          href={`/poll/${poll.id}`}
        />)
      }
    </div>
  </WizardFormContainer>

export default PollsDashboard;