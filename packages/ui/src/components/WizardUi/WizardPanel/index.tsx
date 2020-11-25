import React from 'react';

import './styles.scss';

const WizardPanel: React.FC = ({
  children
}) => <div className='wizard-panel'>
    {children}
  </div>

export default WizardPanel;