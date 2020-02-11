import React from 'react';

const PanelHeader: React.FC<{
  children: React.ReactNode
}> = ({
  children
}) => (
      <div className="panel-header">
        {children}
      </div>
    );

export default PanelHeader;