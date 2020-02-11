import React from 'react';
import cx from 'classnames';

import './styles.scss';

const PanelFooter: React.FC<{
  children: React.ReactNode,
  className?: string
}> = ({ children, className }) => (
  <div className={cx('panel-footer', className)}>
    { children }
  </div>
);

export const DefaultFooter = () => (
  <PanelFooter className='default-footer'>
    This poll widget was created by
    <a href='https://github.com/nukeop/'>nukeop</a>
  </PanelFooter>
);

export default PanelFooter;