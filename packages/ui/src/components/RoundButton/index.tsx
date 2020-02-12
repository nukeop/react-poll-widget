import React from 'react';
import { Button, Transition } from 'semantic-ui-react';
import { withState, withHandlers, compose } from 'recompose';

import './styles.scss';

const RoundButton: React.FC<{
  children?: React.ReactNode,
  Icon?: React.ReactNode,
  color: 'red' | 'orange' | 'yellow' | 'green' | 'blue' | 'violet' | 'olive' | 'teal' | 'purple' | 'pink' | 'brown' | 'grey' | 'black',
  animate: boolean,
  withCloseButton: boolean,
  onClick?: () => void,
  onCloseClick?: () => void
}> = ({
  children,
  Icon,
  color='blue',
  animate,
  withCloseButton,
  onClick,
  onCloseClick
}) => (
      <Button
        circular
        icon
        size='huge'
        color={color}
        onClick={onClick}
        className='round-button'
      >
        <Transition animation='jiggle' visible={animate}>
          { Icon }
        </Transition>
        { children }
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

export default compose(
  withState('animate', 'setAnimate', true),
  withHandlers({
    toggleAnimation: ({ animate, setAnimate }) => () => setAnimate(!animate)
  }),
  withHandlers({
    onClick: ({ toggleAnimation, onClick }) => () => {
      toggleAnimation();
      onClick();
    },
    onCloseClick: ({ onCloseClick }) => (e: MouseEvent) => {
      e.stopPropagation();
      onCloseClick();
    }
  })
)(RoundButton)