import React from 'react';
import { Button, Transition } from 'semantic-ui-react'

import styles from './styles.module.scss';

export const RoundButton: React.FC<{children: React.ReactNode}> = ({ children }) => (
  <Button circular icon size='huge' color='blue'>
    {children}
  </Button>
)