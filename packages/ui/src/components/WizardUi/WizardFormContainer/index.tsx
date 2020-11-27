import React from 'react'
import './styles.scss'

const WizardFormContainer: React.FC = ({ children }) => <div className='wizard-form-container'>
  <div className='content'>
    {children}
  </div>
</div>;

export default WizardFormContainer;