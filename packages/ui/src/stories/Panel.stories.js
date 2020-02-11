import React from 'react';

import { Panel } from '..';
import { Divider } from 'semantic-ui-react';

export default {
  title: 'Panel'
}

export const EmptyPanel = () => <div>
  <Panel />
</div>;

export const PanelWithFooter = () => <div>
  <Panel hasFooter/>
</div>;