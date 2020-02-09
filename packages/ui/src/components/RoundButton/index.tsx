import React from 'react';
import { Button, Transition } from 'semantic-ui-react';
import { withState, withHandlers, compose } from 'recompose';

import './styles.scss';

const RoundButton: React.FC<{
  children: React.ReactNode,
  animate: boolean,
  toggleAnimation: () => void
}> = ({ children, animate, toggleAnimation }) => (
  <Button
    circular
    icon
    size='huge'
    color='blue'
    onClick={toggleAnimation}
    className='round-button'
  >
    <Transition animation='jiggle' visible={animate}>
      {children}
    </Transition>
  </Button>
)

export default compose(
  withState('animate', 'setAnimate', true),
  withHandlers({
    toggleAnimation: ({ animate, setAnimate }) => () => setAnimate(!animate)
  })
)(RoundButton)