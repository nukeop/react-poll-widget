import React from 'react';
import { Form, FormInputProps, Header } from 'semantic-ui-react';
import WizardFormContainer from '../../WizardFormContainer';
import WizardPanel from '../../WizardPanel';

export type CreateNewPollProps = {
  pollName?: string;
  onPollNameChange: FormInputProps['onChange'];
  onCreate: React.MouseEventHandler;
}

const CreateNewPoll: React.FC<CreateNewPollProps> = ({
  pollName,
  onPollNameChange,
  onCreate
}) => <WizardFormContainer>
    <Header as='h1'>
      Create a new poll
  </Header>
    <WizardPanel>
      <Form>
        <Form.Input
          fluid
          label='Poll name'
          placeholder='Poll name'
          onChange={onPollNameChange}
          value={pollName}
        />
        <Form.Button
          className='create-new-poll-button'
          color='green'
          onClick={onCreate}
        >
          Create
      </Form.Button>
      </Form>
    </WizardPanel>
  </WizardFormContainer>

export default CreateNewPoll;