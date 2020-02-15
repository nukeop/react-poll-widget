import React from 'react';

import './styles.scss';

const PanelContentHeader: React.FC<{ children: React.ReactNode }> = ({
  children
}) => (
    <h4 className='panel-content-header'> {children} </h4>
  );

export default PanelContentHeader;