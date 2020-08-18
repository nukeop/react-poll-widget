import { renderHook, act } from '@testing-library/react-hooks';
import { usePollState } from '../../hooks/usePollState';
var steps = {
    single: {
        title: 'Single step',
        header: 'Single selection step',
        description: 'Description of the step',
        type: 'single',
        options: [
            { id: '1', label: 'First option', value: '1' },
            { id: '2', label: 'Second option', value: '2' },
            { id: '3', label: 'Third option', value: '3' }
        ]
    },
    button: {
        title: 'Button step',
        header: 'Button selection step',
        description: 'Description of the step',
        type: 'button',
        options: [
            { id: '1', label: 'First option', value: '1' },
            { id: '2', label: 'Second option', value: '2' },
            { id: '3', label: 'Third option', value: '3' }
        ]
    },
    multi: {
        title: 'Multi step',
        header: 'Multi selection step',
        description: 'Description of the step',
        type: 'multi',
        options: [
            { id: '1', label: 'First option', value: '1' },
            { id: '2', label: 'Second option', value: '2' },
            { id: '3', label: 'Third option', value: '3' }
        ]
    },
    text: {
        title: 'Text step',
        header: 'Text selection step',
        description: 'Description of the step',
        type: 'text',
        options: []
    },
};
describe('usePollState hook test', function () {
    it('single step with single selection', function () {
        var result = renderHook(function () { return usePollState([steps.single]); }).result;
        act(function () {
            expect(result.current[0][0]).toBe(steps.single.options[0]);
            expect(result.current[0][1]).toBeInstanceOf(Function);
        });
    });
    it('single step with multi selection', function () {
        var result = renderHook(function () { return usePollState([steps.multi]); }).result;
        act(function () {
            expect(result.current[0][0]).toHaveLength(0);
            expect(result.current[0][1]).toBeInstanceOf(Function);
        });
    });
    it('single step with text input', function () {
        var result = renderHook(function () { return usePollState([steps.text]); }).result;
        act(function () {
            expect(result.current[0][0]).toBe('');
            expect(result.current[0][1]).toBeInstanceOf(Function);
        });
    });
});
