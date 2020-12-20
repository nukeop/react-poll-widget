import React from "react";

import { CreateNewPollViewComponent } from "./CreateNewPollViewComponent"
import { useForm } from "../../hooks/useForm";
import { useHistory } from "react-router";
import { useCreateNewPoll } from "../../hooks/useCreateNewPoll";

export const fields = {
  name: {
    name: 'name',
    label: 'New poll name',
    placeholder: 'Enter poll name',
    initialValue: ''
  }
}

export const CreateNewPollViewContainer: React.FC = () => {
  const history = useHistory();
  const createNewPollViewProps = useCreateNewPoll();
  const formProps = useForm({
    initialFields: fields,
    onSubmit: async (values, { setSubmitting }) => {
      setSubmitting(true)
      try {
        const result = await createNewPollViewProps.onCreateNewPoll(values.name);
        history.push(`/polls/${result.id}`);
      } catch (e) {
        console.error(e);
      }
      setSubmitting(false)
    }
  })
  return <CreateNewPollViewComponent
    {...formProps}
    {...createNewPollViewProps}
  />;
}