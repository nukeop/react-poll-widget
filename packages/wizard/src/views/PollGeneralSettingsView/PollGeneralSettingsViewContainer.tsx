import React from "react"
import { useDispatch } from "react-redux";
import { useConfirmationModal } from "../../hooks/useConfirmationModal";

import { useCurrentPoll } from "../../hooks/useCurrentPoll";
import { useDeletePoll } from "../../hooks/useDeletePoll";
import { useForm } from "../../hooks/useForm";
import { useUpdatePoll } from "../../hooks/useUpdatePoll";
import { fetchPoll } from "../../store/actions/polls";
import { PollGeneralSettingsViewComponent } from "./PollGeneralSettingsViewComponent";

export const fields = (pollName: string) => ({
  name: {
    name: 'name',
    label: 'Poll name',
    placeholder: 'Enter new name',
    initialValue: pollName
  }
})

export const PollGeneralSettingsViewContainer: React.FC = () => {
  const dispatch = useDispatch();
  const { poll, isLoading } = useCurrentPoll();
  const { onUpdatePoll } = useUpdatePoll();
  const { onDeletePoll } = useDeletePoll('/polls');
  const formProps = useForm({
    initialFields: fields(poll?.name || ''),
    onSubmit: async (values, { setSubmitting }) => {
      setSubmitting(true);
      try {
        await onUpdatePoll(poll?.id || '', { name: values.name });
        await dispatch(fetchPoll.request(poll?.id || ''));
      } catch (e) {
        console.error(e);
      }
      setSubmitting(false);
    },
    enableReinitialize: true
  });

  const { openModal, renderModal } = useConfirmationModal({
    onConfirm: () => onDeletePoll(poll?.id || '')
  });

  return <>
  {renderModal()}
  <PollGeneralSettingsViewComponent
    {...formProps}
    isLoading={isLoading}
    poll={poll}
    onDelete={openModal}
  />
  </>;
}