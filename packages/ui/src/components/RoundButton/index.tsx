import React, { useRef } from 'react';
import cx from 'classnames';
import { Button, Transition } from 'semantic-ui-react';
import { withState, withHandlers, compose } from 'recompose';
import _ from 'lodash';

import './styles.scss';

const RoundButton: React.FC<{
  Icon?: React.ReactNode,
  text: string,
  color: 'red' | 'orange' | 'yellow' | 'green' | 'blue' | 'violet' | 'olive' | 'teal' | 'purple' | 'pink' | 'brown' | 'grey' | 'black',
  animate?: boolean,
  collapsed: boolean,
  withCloseButton?: boolean,
  onClick?: () => void,
  onCloseClick?: () => void
}> = ({
  Icon,
  text,
  color = 'blue',
  animate=false,
  collapsed,
  withCloseButton,
  onClick,
  onCloseClick
}) => {
    const textRef = useRef(null);

    return (
      <Button
        circular
        icon
        size='huge'
        color={color}
        onClick={onClick}
        className='round-button'

      >
        <Transition animation='jiggle' visible={animate}>
          {Icon}
        </Transition>
        {
          text &&
          <div 
          className={cx('text-box', { collapsed })} 
          style={{
            paddingRight: `${
              collapsed ? 0 : _.get(textRef, 'current.offsetWidth')
              }px`
          }}>
            <h5 ref={textRef} className={cx({ collapsed })} >{text}</h5>
          </div>
        }
        {
          withCloseButton &&
          <Button
            icon='close'
            basic
            className='close-button'
            onClick={onCloseClick}
          />
        }
      </Button>
    )
  }

export default compose(
  withState('animate', 'setAnimate', true),
  withState('collapsed', 'setCollapsed', true),
  withHandlers({
    toggleAnimation: ({ animate, setAnimate }) => () => setAnimate(!animate),
    toggleCollapsed: ({ collapsed, setCollapsed }) => () => setCollapsed(!collapsed)
  }),
  withHandlers({
    onClick: ({ toggleAnimation, toggleCollapsed, onClick }) => () => {
      toggleAnimation();
      toggleCollapsed();
      if (onClick) {
        onClick();
      }
    },
    onCloseClick: ({ onCloseClick }) => (e: MouseEvent) => {
      e.stopPropagation();
      if (onCloseClick) {
        onCloseClick();
      }
    }
  })
)(RoundButton)