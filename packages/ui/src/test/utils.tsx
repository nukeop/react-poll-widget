import React from 'react';
import { render } from '@testing-library/react'

export const createSnapshotTest = <ComponentProps extends {}>(
  Component: React.ComponentType<ComponentProps>,
  props?: Partial<ComponentProps>,
  snapshotName?: string
) => {
  describe(`(Snapshot) ${snapshotName || Component.displayName}`, () => {
    it('should render', () => {
      const { asFragment } = render(<Component { ...props } />);
      expect(asFragment()).toMatchSnapshot();
    })
  })
}