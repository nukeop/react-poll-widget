import React from "react";
import { Icon } from "semantic-ui-react";

import RoundButton from "../components/RoundButton";
import { createSnapshotTest } from "./utils";

createSnapshotTest(RoundButton, {
  color: 'red',
  Icon: <Icon name='chart bar' />
}, 'Basic')

createSnapshotTest(RoundButton, {
  color: 'red',
  Icon: <Icon name='chart bar' />,
  withCloseButton: true
}, 'With close button')

createSnapshotTest(RoundButton, {
  color: 'red',
  Icon: <Icon name='chart bar' />,
  text: 'Long test'
}, 'With content')