import React from 'react';
import cx from 'classnames';

import { PanelColor } from '../Panel.types';

import './styles.scss';

const PanelHeader: React.FC<{
  children: React.ReactNode,
  color: PanelColor
}> = ({
  children,
  color
}) => (
      <div className={
        cx(
          'panel-header',
          color
        )
      }>
        <h3>
          {children}
        </h3>
      </div>
    );

export default PanelHeader;