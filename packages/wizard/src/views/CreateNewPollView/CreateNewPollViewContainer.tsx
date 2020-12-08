import React from "react"

import { useCreateNewPollViewProps } from "./CreateNewPollView.hooks"
import { CreateNewPollViewComponent } from "./CreateNewPollViewComponent"

export const CreateNewPollViewContainer: React.FC = () => {
  const props = useCreateNewPollViewProps();
  return <CreateNewPollViewComponent {...props} />
}