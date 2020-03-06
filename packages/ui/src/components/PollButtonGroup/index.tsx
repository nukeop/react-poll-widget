import React from 'react';
import { Button } from 'semantic-ui-react';

import './styles.scss';

type PollButton = {
    content: React.ReactNode;
    onClick?: () => void
}

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