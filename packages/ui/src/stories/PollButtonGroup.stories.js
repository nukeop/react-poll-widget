import React from 'react';

import { PollButtonGroup } from '..';

export default {
    title: 'Poll button group'
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