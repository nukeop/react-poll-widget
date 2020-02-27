import React from 'react';
import _ from 'lodash';
import { Form } from 'semantic-ui-react';

const TextAreaPoll: React.FC<{
  loading: boolean;
  content: string;
  error?: string;
  onChange: (e: React.FormEvent) => void;
  onSubmit: (e: React.FormEvent) => void;
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
        <Form.Button type='submit' color='green' disabled={!_.isNil(error)}>
          Submit
        </Form.Button>
      </Form>
    );

export default TextAreaPoll;