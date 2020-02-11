import React from 'react';

import './styles.scss';

const PanelContent: React.FC<{
  children: React.ReactNode
}> = ({ children }) => (
  <div className="panel-content">
    {children}
  </div>
)

export default PanelContent;