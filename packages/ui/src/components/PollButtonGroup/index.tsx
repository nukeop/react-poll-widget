import React from 'react';
import { Button } from 'semantic-ui-react';

import { PollOption, SelectOption } from '../types';
import './styles.scss';

const PollButtonGroup: React.FC<{
    options: PollOption[],
    selectOption: SelectOption,
    icons?: boolean
}> = ({
    options,
    selectOption,
    icons = false
}) => (
            <Button.Group
                fluid
                icon={icons}
                className='poll-button-group'
            >
                {
                    options.map(option => {
                        const handleClick = () => selectOption(option);
                        return (
                            <Button onClick={handleClick}>
                                {option.label}
                            </Button>
                        )
                    })
                }
            </Button.Group>
        )

export default PollButtonGroup