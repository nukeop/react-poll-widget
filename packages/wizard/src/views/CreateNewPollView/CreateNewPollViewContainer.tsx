import React from "react";

import { useCreateNewPollViewProps } from "./CreateNewPollView.hooks"
import { CreateNewPollViewComponent } from "./CreateNewPollViewComponent"
import { useForm } from "../../hooks/useForm";

export const fields = {
  name: {
    name: 'name',
    label: 'New poll name',
    placeholder: 'Enter poll name',
    initialValue: ''
  }
}

export const CreateNewPollViewContainer: React.FC = () => {
  const createNewPollViewProps = useCreateNewPollViewProps();
  const formProps = useForm({
    initialFields: fields,
    
    onSubmit: async(values, { setSubmitting }) => {
      console.log('setting submitting')
      setSubmitting(true)
      await createNewPollViewProps.onCreateNewPoll(values.name);
      console.log('setting submitting false')
      setSubmitting(false)
    }
  })
  return <CreateNewPollViewComponent
    {...formProps}
    {...createNewPollViewProps}
  />;
}