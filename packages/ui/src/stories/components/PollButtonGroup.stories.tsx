import React from 'react';
import { Icon } from 'semantic-ui-react';

import { PollButtonGroup } from '../..';

export default {
    title: 'Components/Poll button group'
}

export const YesNo = () => <div style={{padding: '2em'}}>
    <PollButtonGroup
        buttons={[
            { content: 'Yes' },
            { content: 'No' }
        ]}
    />
</div>

export const YesNoMaybe = () => <div style={{padding: '2em'}}>
    <PollButtonGroup
        buttons={[
            { content: 'Yes' },
            { content: 'Maybe' },
            { content: 'No' }
        ]}
    />
</div>

export const WithIcons = () => <div style={{padding: '2em'}}>
    <PollButtonGroup
        icons
        buttons={[
            { content: <Icon size='big' name='smile' /> },
            { content: <Icon size='big' name='meh' /> },
            { content: <Icon size='big' name='frown' /> }
        ]}
    />
</div>