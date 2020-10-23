import React from 'react';
import isNil from 'lodash/isNil'
import { Form } from 'semantic-ui-react';

const TextAreaPoll: React.FC<{
  loading?: boolean;
  content?: string;
  error?: string;
  onChange?: React.FormEventHandler;
  onSubmit?: React.FormEventHandler;
}> = ({
  loading,
  content,
  error,
  onChange,
  onSubmit
}) => (
      <Form onSubmit={onSubmit} loading={loading}>
        <Form.TextArea onChange={onChange} error={error}>
          {content}
        </Form.TextArea>
        <Form.Button type='submit' color='green' disabled={!isNil(error)}>
          Submit
        </Form.Button>
      </Form>
    );

export default TextAreaPoll;