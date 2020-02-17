import React from 'react';

import PanelContent from './PanelContent';
import PanelHeader from './PanelHeader';
import PanelFooter, { DefaultFooter } from './PanelFooter';
import { PanelColor } from '../types';

import './styles.scss';

const Panel: React.FC<{
  children: React.ReactNode,
  hasFooter: boolean,
  hasHeader: boolean,
  footerContent: React.ReactNode,
  headerContent: React.ReactNode,
  color: PanelColor
}> = ({
  children,
  hasFooter,
  hasHeader,
  footerContent,
  headerContent,
  color
}) => (
      <div className="panel">
        {
          hasHeader &&
          <PanelHeader
            color={color}
          >
            {headerContent}
          </PanelHeader>
        }

        <PanelContent
          color={color}
        >
          {children}
        </PanelContent>

        {
          hasFooter && (
            footerContent
              ? <PanelFooter>
                {footerContent}
              </PanelFooter>
              : <DefaultFooter />
          )
        }
      </div>
    )

export default Panel;