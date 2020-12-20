import React from 'react';
import { Form, Header } from 'semantic-ui-react';
import { FieldsPropsType } from '../../../types';
import WizardFormContainer from '../../WizardFormContainer';
import WizardPanel from '../../WizardPanel';

export type CreateNewPollProps = {
  fieldsProps: FieldsPropsType;
  onSubmit: (e?: React.FormEvent<HTMLFormElement>) => void;
  isSubmitting?: boolean;
  isLoading?: boolean;
}

const CreateNewPoll: React.FC<CreateNewPollProps> = ({
  fieldsProps,
  isSubmitting,
  isLoading,
  onSubmit
}) => <WizardFormContainer>
    <Header as='h1'>
      Create a new poll
  </Header>
    <WizardPanel>
      <Form
      loading={isSubmitting || isLoading}
      >
        <Form.Input
          fluid
          {...fieldsProps.name}
        />
        <Form.Button
          className='create-new-poll-button'
          color='green'
          type='submit'
          onClick={() => onSubmit()}
        >
          Create
      </Form.Button>
      </Form>
    </WizardPanel>
  </WizardFormContainer>

export default CreateNewPoll;