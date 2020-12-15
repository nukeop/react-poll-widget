import React from "react"
import { useRouteMatch } from "react-router";
import { useCurrentPoll } from "../../hooks/useCurrentPoll";

import { PollGeneralSettingsViewComponent } from "./PollGeneralSettingsViewComponent";

export const PollGeneralSettingsViewContainer: React.FC = () => {
  const match = useRouteMatch<{ id: string; }>();
  const id = match?.params?.id;
  const { poll } = useCurrentPoll();

  return <PollGeneralSettingsViewComponent
    poll={poll}
    fieldsProps={{}}
  />;
}