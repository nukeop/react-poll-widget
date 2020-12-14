import React from "react"
import { useRouteMatch } from "react-router";

import { PollGeneralSettingsViewComponent } from "./PollGeneralSettingsViewComponent";

export const PollGeneralSettingsViewContainer: React.FC = () => {
  const match = useRouteMatch<{ id: string; }>();
  const id = match?.params?.id;

  return <PollGeneralSettingsViewComponent
    poll={{
      id: 'test',
      name: 'test'
    }}
    fieldsProps={{}}
  />;
}