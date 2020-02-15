import React from 'react';

import { Panel } from '..';
import PanelContentHeader from '../components/Panel/PanelContentHeader';

export default {
  title: 'Panel'
}

export const EmptyPanel = () => <div>
  <Panel />
</div>;

export const PanelWithFooter = () => <div>
  <Panel hasFooter />
</div>;

export const PanelWithHeader = () => <div>
  <Panel
    color='blue'
    hasHeader
    hasFooter
    headerContent='Test header'
  />
</div>;

export const PanelWithContent = () => <div>
  <Panel
    color='rose'
    hasHeader
    hasFooter
    headerContent='Test header'
  >
    <PanelContentHeader>
      This is a panel with some content.
    </PanelContentHeader>
  </Panel>
</div>;