import React from 'react';
import { Icon } from 'semantic-ui-react';

import { PollButtonGroup } from '@react-poll-widget/ui';

export default {
    title: 'Components|Poll button group'
}

export const YesNo = () => <div style={{padding: '2em'}}>
    <PollButtonGroup
        options={[
            { id: '1', value: 'Yes', label: 'Yes' },
            { id: '2', value: 'No', label: 'No' }
        ]}
        selectOption={() => {}}
    />
</div>

export const YesNoMaybe = () => <div style={{padding: '2em'}}>
    <PollButtonGroup
        options={[
            { id: '1', value: 'Yes', label: 'Yes' },
            { id: '2', value: 'Maybe', label: 'Maybe' },
            { id: '3', value: 'No', label: 'No' }
        ]}
        selectOption={() => {}}
    />
</div>