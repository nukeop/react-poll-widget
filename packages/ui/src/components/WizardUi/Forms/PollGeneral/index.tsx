import React from 'react';
import { Button, Form, Header } from 'semantic-ui-react';
import { Poll } from '@react-poll-widget/core/src/models/polls';

import WizardFormContainer from '../../WizardFormContainer';
import WizardPanel from '../../WizardPanel';
import { FieldsPropsType } from '../../../types';
import Paragraph from '../../../Paragraph';

export type PollGeneralProps = {
  isLoading?: boolean;
  poll: Poll;
  fieldsProps: FieldsPropsType;
}

const PollGeneral: React.FC<PollGeneralProps> = ({
  isLoading,
  poll,
  fieldsProps
}) => <WizardFormContainer>
    <Header as='h1'>
      Poll - general settings
      <Header.Subheader as='h2'>
        Selected poll: {poll.name}
      </Header.Subheader>
    </Header>
    <WizardPanel isLoading={isLoading}>
      <Form>
        <Form.Input
          fluid
          {...fieldsProps.name}
        />
        <Form.Button
          color='blue'
          type='submit'
        >
          Save
      </Form.Button>
      </Form>
    </WizardPanel>
    <WizardPanel isLoading={isLoading}>
      <Button
        color='red'
      >
        Delete poll
      </Button>
      <Paragraph inline>
        This will completely delete the poll and all its content.
      </Paragraph>
    </WizardPanel>
  </WizardFormContainer>

export default PollGeneral;