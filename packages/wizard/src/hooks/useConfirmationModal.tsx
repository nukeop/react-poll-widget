import React, { useCallback, useState } from "react";
import { ConfirmationModal } from "@react-poll-widget/ui";

type UseConfirmationModalArgs = {
  onConfirm: React.MouseEventHandler
};

export const useConfirmationModal = ({
  onConfirm
}: UseConfirmationModalArgs) => {
  const [open, setOpen] = useState(false);

  const openModal = useCallback(() => setOpen(true), [setOpen]);
  const closeModal = useCallback(() => setOpen(false), [setOpen]);

  const renderModal = () => <ConfirmationModal
    open={open}
    onCancel={closeModal}
    onConfirm={onConfirm}
  />;

  return { 
    renderModal,
    openModal
   };
}