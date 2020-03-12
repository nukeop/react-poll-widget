import React from 'react';

import { 
  Panel,
  PanelContentHeader,
  PanelContentFooter
} from '@react-poll-widget/ui';

export default {
  title: 'Components|Panel'
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

export const PanelWithStepIndicator = () => <div>
  <Panel
    color='blue'
    hasHeader
    hasFooter
    hasSteps
    headerContent='Test header'
    step={2}
    stepsTotal={5}
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
      This is the header.
    </PanelContentHeader>
    Ths is the content of the panel.

    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consectetur mi tellus, sit amet efficitur eros consequat eget. Mauris facilisis pellentesque ante, eu laoreet augue varius eu. Aliquam eget imperdiet ligula, ac bibendum dui. Nam enim diam, luctus vitae venenatis ut, sodales id mi. Suspendisse non nisl libero. 

    <PanelContentFooter hasSubmit hasBack />
  </Panel>
</div>;