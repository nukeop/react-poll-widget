import React from "react"

import { useCreateNewPollViewProps } from "./CreateNewPollView.hooks"
import { CreateNewPollViewComponent } from "./CreateNewPollViewComponent"
import { createPoll } from "../../api/polls"
import { withForm, WithFormProps } from "../../hoc/withForm"

export const fields = {
  name: {
    name: 'name',
    label: 'New poll name',
    placeholder: 'Enter poll name',
    initialValue: ''
  }
}

export type CreateNewPollViewProps = WithFormProps

export const CreateNewPollView: React.FC<CreateNewPollViewProps> = (props) => {
  const createNewPollViewProps = useCreateNewPollViewProps();
  return <CreateNewPollViewComponent
    {...props}
    {...createNewPollViewProps}
  />
}

export const CreateNewPollViewContainer = withForm(
  fields,
  async (values, { setSubmitting }) => {
    setSubmitting(true);
    await createPoll(values.name);
    setSubmitting(false);
  }
)(CreateNewPollView)