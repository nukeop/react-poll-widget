import React, { useRef, useState, useCallback } from 'react';
import cx from 'classnames';
import { Button, Transition } from 'semantic-ui-react';
import get from 'lodash/get';

import './styles.scss';
import { SemanticCOLORS } from 'semantic-ui-react/dist/commonjs/generic';

type RoundButtonProps = {
  Icon?: React.ReactNode;
  text?: string;
  color?: SemanticCOLORS |  'red' | 'orange' | 'yellow' | 'green' | 'blue' | 'violet' | 'olive' | 'teal' | 'purple' | 'pink' | 'brown' | 'grey' | 'black' | 'peach';
  animate: boolean;
  collapsed: boolean;
  withCloseButton?: boolean;
  onClick: () => void;
  onCloseClick: () => void;
  setAnimate: (val: boolean) => void;
  setCollapsed: (val: boolean) => void;
  toggleAnimation: () => void;
  toggleCollapsed: () => void;
};

const RoundButton: React.FC<RoundButtonProps> = ({
  Icon,
  text,
  color = 'blue',
  withCloseButton,
  onClick,
  onCloseClick
}) => {
  const textRef = useRef(null);

  const [animate, setAnimate] = useState(true);
  const [collapsed, setCollapsed] = useState(true);

  const toggleAnimation = useCallback(() => setAnimate(!animate), [animate, setAnimate]);
  const toggleCollapsed = useCallback(() => setCollapsed(!collapsed), [collapsed, setCollapsed]);


  const onClickCallback = useCallback(() => {
    toggleAnimation();
    toggleCollapsed();
    if (onClick) {
      onClick();
    }
  }, [toggleAnimation, toggleCollapsed, onClick]);

  const onCloseClickCallback = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    if (onCloseClick) {
      onCloseClick();
    }
  }, [onCloseClick]);

  console.log("dupa");
  console.log("dupa2");
  return (
    <Button
      circular
      icon
      size='huge'
      color={color}
      onClick={onClickCallback}
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
            paddingRight: `${collapsed ? 0 : get(textRef, 'current.offsetWidth')
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
          onClick={onCloseClickCallback}
        />
      }
    </Button>
  )
}

export default RoundButton;