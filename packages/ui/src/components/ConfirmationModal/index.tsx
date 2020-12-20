import React from 'react';
import { Confirm, ConfirmProps } from 'semantic-ui-react';

export type ConfirmationModalProps = Pick<ConfirmProps, 'onCancel' | 'onConfirm' | 'open' | 'content'>;

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  open,
  onCancel,
  onConfirm,
  content
}) => <Confirm
    open={open}
    onCancel={onCancel}
    onConfirm={onConfirm}
    content={content}
  />;

export default ConfirmationModal;