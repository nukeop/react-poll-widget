import React from 'react';

import './styles.scss';

const PanelFooter: React.FC<{
  children: React.ReactNode
}> = ({ children }) => (
  <div className="panel-footer">
    {children}
  </div>
)

export const DefaultFooter = () => (
  <PanelFooter>
    Test
  </PanelFooter>
);

export default PanelFooter;