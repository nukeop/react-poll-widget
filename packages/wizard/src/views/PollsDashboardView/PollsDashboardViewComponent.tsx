import React from "react";
import { PollsDashboard } from "@react-poll-widget/ui";
import { PollsDashboardProps } from "@react-poll-widget/ui/src/components/WizardUi/Forms/PollsDashboard";

import { PageWithSidebar } from "../../layouts/PageWithSidebar";

export type PollsDashboardViewComponentProps = {
  polls: PollsDashboardProps['polls'];
  isLoading: PollsDashboardProps['isLoading'];
};

export const PollsDashboardViewComponent: React.FC<PollsDashboardViewComponentProps> = (props) =>
  <PageWithSidebar>
    <PollsDashboard
      {...props}
    />
  </PageWithSidebar>