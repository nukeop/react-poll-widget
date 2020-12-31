import React from 'react'
import cx from 'classnames';
import './styles.scss'

export type WizardFormContainerProps = {
  className?: string;
}
const WizardFormContainer: React.FC<WizardFormContainerProps> = ({
  children,
  className
}) => <div className={cx('wizard-form-container', className)}>
    <div className='content'>
      {children}
    </div>
  </div>;

export default WizardFormContainer;