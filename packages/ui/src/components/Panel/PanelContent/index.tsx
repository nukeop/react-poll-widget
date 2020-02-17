import React from 'react';
import cx from 'classnames';

import { PanelColor } from '../../types';

import './styles.scss';

const PanelContent: React.FC<{
  children: React.ReactNode,
  color: PanelColor
}> = ({ children, color }) => (
  <div className={cx("panel-content", color)}>
    <div className="panel-content-inner">
    {children}
    </div>
  </div>
)

export default PanelContent;