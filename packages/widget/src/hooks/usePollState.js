import { useState } from 'react';
import _ from 'lodash';
export var usePollState = function (steps) {
    return _.map(steps, function (step) {
        switch (step.type) {
            case 'single':
            case 'button':
                return useState();
            case 'multi':
                return useState([]);
            case 'text':
                return useState('');
        }
    });
};
