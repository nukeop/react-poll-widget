import React from 'react';
import { Button } from 'semantic-ui-react';

import { PollButton } from '../types';
import './styles.scss';

const PollButtonGroup: React.FC<{
    buttons: PollButton[],
    icons?: boolean
}> = ({
    buttons,
    icons=false
}) => (
            <Button.Group 
            fluid 
            icon={icons}
            className='poll-button-group'
            >
                {
                    buttons.map(button => (
                        <Button onClick={button.onClick}>
                            {button.content}
                        </Button>
                    ))
                }
            </Button.Group>
        )

export default PollButtonGroup