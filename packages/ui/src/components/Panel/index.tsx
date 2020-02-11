import React from 'react';

import PanelContent from './PanelContent';
import PanelHeader from './PanelHeader';
import PanelFooter, { DefaultFooter } from './PanelFooter';

import './styles.scss';

const Panel: React.FC<{
  children: React.ReactNode,
  hasFooter: boolean,
  footerContent: React.ReactNode
}> = ({
  children,
  hasFooter,
  footerContent
}) => (
      <div className="panel">
        <PanelHeader>

        </PanelHeader>

        <PanelContent>
          {children}
        </PanelContent>
        
        {
          hasFooter &&
          footerContent
          ? <PanelFooter>
            {footerContent}
          </PanelFooter>
          : <DefaultFooter />
        }
      </div>
    )

export default Panel;