import React from 'react';
import cx from 'classnames';
import { Dimmer, Loader } from 'semantic-ui-react';

import './styles.scss';

export type WizardPanelProps = {
  className?: string;
  isLoading?: boolean;
}

const WizardPanel: React.FC<WizardPanelProps> = ({
  className,
  isLoading,
  children
}) => <div className={cx('wizard-panel', className)}>
  <Dimmer inverted active={isLoading}>
    <Loader />
  </Dimmer>
    {children}
  </div>

export default WizardPanel;