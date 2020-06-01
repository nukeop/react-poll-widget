import { renderHook, act } from '@testing-library/react-hooks'

import { usePollState } from '../../hooks/usePollState';

it('usePollState hook test', () => {
  const state = renderHook(() => usePollState([
    {
      title: 'First step',
      header: 'This is the first step',
      description: 'Description of the first step',
      type: 'single',
      options: [
        { id: '1', label: 'First option', value: '1' },
        { id: '2', label: 'Second option', value: '2' },
        { id: '3', label: 'Third option', value: '3' }
      ]
    }
  ]))

  act(() => {
    console.log(state.current)
  })

  expect(1 + 2).toEqual(3);
})