import React from 'react';
import cx from 'classnames';

import './styles.scss';

const Checkbox: React.FC<{
  type?: 'checkbox' | 'radio',
  label: React.ReactNode,
  checked?: boolean,
  onClick?: React.MouseEventHandler;
}> = ({
  type = 'checkbox',
  label,
  checked,
  onClick
}) => (
      <div
        className={cx(
          'poll-widget-checkbox',
          type,
          { checked }
        )}
        onClick={onClick}
      >
        { label }
      </div>
    );

export default Checkbox;