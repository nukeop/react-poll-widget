import React from 'react';
import cx from 'classnames';

import './styles.scss';

export type WizardPanelProps = {
  className?: string;
}

const WizardPanel: React.FC<WizardPanelProps> = ({
  className,
  children
}) => <div className={cx('wizard-panel', className)}>
    {children}
  </div>

export default WizardPanel;