import React from 'react';
import { ConfirmationModal } from '@react-poll-widget/ui';

export default {
  title: 'Wizard UI/Components/Confirmation Modal'
}

export const Basic = () => <ConfirmationModal open />
export const CustomContent = () => <ConfirmationModal open content="Please confirm this action" />