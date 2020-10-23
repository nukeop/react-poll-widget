import React from 'react';
import cx from 'classnames';
import isNil from 'lodash/isNil';

import PanelContent from './PanelContent';
import PanelHeader from './PanelHeader';
import PanelFooter, { DefaultFooter } from './PanelFooter';
import ProgressIndicator from '../ProgressIndicator';
import { PanelColor } from '../types';

import './styles.scss';

const Panel: React.FC<{
  children?: React.ReactNode;
  className?: string;
  style?: React.StyleHTMLAttributes<HTMLElement>;
  hasFooter?: boolean;
  hasHeader?: boolean;
  hasSteps?: boolean;
  footerContent?: React.ReactNode;
  headerContent?: React.ReactNode;
  color?: PanelColor;
  step?: number;
  stepsTotal?: number;
}> = ({
  children,
  className,
  style,
  hasFooter,
  hasHeader,
  hasSteps,
  footerContent,
  headerContent,
  color='blue',
  step,
  stepsTotal
}) => (
      <div
        className={cx('panel', className)}
        style={style}
      >
        {
          hasHeader &&
          <PanelHeader
            color={color}
          >
            {headerContent}
            {
              hasSteps && !isNil(step) && !isNil(stepsTotal) &&
              <ProgressIndicator
                step={step}
                stepsTotal={stepsTotal}
              />
            }
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