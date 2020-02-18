import React from 'react';
import { Form } from 'semantic-ui-react';

const TextAreaPoll: React.FC<{
  content: string;
  onChange: (e: React.FormEvent) => void;
  onSubmit: (e: React.FormEvent) => void;
}> = ({
  content,
  onChange,
  onSubmit
}) => (
      <Form onSubmit={onSubmit}>
        <Form.TextArea onChange={onChange}>
          {content}
        </Form.TextArea>
        <Form.Button type='submit' color='green'>
          Submit
        </Form.Button>
      </Form>
    );

export default TextAreaPoll;